package cl.RECLAMOS.Reclamos.API;

import cl.RECLAMOS.Reclamos.JDBC.DAO.ReclamoDAO;
import cl.RECLAMOS.Reclamos.JDBC.DAO.RespuestaDAO;
import cl.RECLAMOS.Reclamos.JDBC.DAO.UsuarioDAO;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Reclamos;
import cl.RECLAMOS.Reclamos.JDBC.DTO.SendEmailService;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ReclamosResource {
    @Autowired
    private SendEmailService sendEmailService;
    @RequestMapping(method = RequestMethod.GET, value = "allAdmin")
    public List<Reclamos> GETADMIN() throws SQLException {
        List<Reclamos> r = new ReclamoDAO().GETADMIN();
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "allUser/{id}")
    public List<Reclamos> GETUSER(@PathVariable("id") String s) throws SQLException {
        List<Reclamos> r = new ReclamoDAO().GETUSER(s);
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "allReclamo/{id}")
    public List<Reclamos> GETALL(@PathVariable("id") int i) throws SQLException {
        List<Reclamos> r = new ReclamoDAO().GETxRECLAMO(i);
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "reclamosAdmin/{rut}")
    public List<Reclamos> GETALL(@PathVariable("rut") String rut) throws SQLException {
        List<Reclamos> r = new ReclamoDAO().GETxADMIN(rut);
        return r;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "delete/{id}")
    public void DELETE(@PathVariable("id") int i) throws SQLException {
        new ReclamoDAO().DELETE(i);
    }

    @RequestMapping(method = RequestMethod.POST, value = "create")
    public void CREATE(@RequestBody Reclamos r) throws SQLException {
        new ReclamoDAO().CREATE(r);
        String correoUser = new UsuarioDAO().obtenerCorreoPorRut(r.getRut());
        String body = "El reclamo numero: #"+r.getNumeroReclamo()+" Ha sido ingresado con exito con fecha: "+r.getFecha();
        sendEmailService.sendEmail("reclamos.chile.solutions@gmail.com",correoUser,"Reclamo Ingresado",body);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "update/{id}")
    public void UPDATE(@PathVariable("id") int i, @RequestBody Reclamos r) throws SQLException {
        new ReclamoDAO().UPDATE(r, i);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "updateEstado/{id}")
    public void UPDATERESUELTO(@PathVariable("id") int i) throws SQLException {
        new ReclamoDAO().UPDATEESTADO(i);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "insertarAntecedente")
    public void antecedente(@RequestBody Reclamos u) throws SQLException {
        new ReclamoDAO().modificarAntecedente(u);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "asignarReclamos/{nreclamo}")
    public void ASIGNARRECLAMO(@PathVariable("nreclamo") int i, @RequestBody Usuario u) throws SQLException {
        new ReclamoDAO().asignarReclamoAdmin(u,i);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "insertarComentario/{nreclamo}")
    public void comentarioUsuario(@RequestBody Reclamos u) throws SQLException {
        new ReclamoDAO().modificarComentario(u);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "editarReclamo")
    public void modifificarReclamo (@RequestBody Reclamos a) throws SQLException {
        new ReclamoDAO().modificar(a);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "borrarReclamoRespuesta/{id}")
    public void borrarReclamoRespuesta(@PathVariable("id") int i) throws SQLException {
        new RespuestaDAO().DELETE(i);
        new ReclamoDAO().DELETE(i);
    }

}
