package cl.RECLAMOS.Reclamos.API;

import cl.RECLAMOS.Reclamos.JDBC.DAO.ReclamosDAO;
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
    //Metodo para enviar email
    @Autowired
    private SendEmailService sendEmailService;

    //Metodos GET
    @RequestMapping(method = RequestMethod.GET, value = "allAdmin")
    public List<Reclamos> GETADMIN() throws SQLException {
        List<Reclamos> r = new ReclamosDAO().GETADMIN();
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "allUser/{id}")
    public List<Reclamos> GETUSER(@PathVariable("id") String s) throws SQLException {
        List<Reclamos> r = new ReclamosDAO().GETUSER(s);
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "allReclamo/{id}")
    public List<Reclamos> GETALL(@PathVariable("id") int i) throws SQLException {
        List<Reclamos> r = new ReclamosDAO().GETxRECLAMO(i);
        return r;
    }
    @RequestMapping(method = RequestMethod.GET, value = "reclamosAdmin/{rut}")
    public List<Reclamos> GETALL(@PathVariable("rut") String rut) throws SQLException {
        List<Reclamos> r = new ReclamosDAO().GETxADMIN(rut);
        return r;
    }



    @RequestMapping(method = RequestMethod.PUT, value = "updateEstado/{id}")
    public void UPDATERESUELTO(@PathVariable("id") int i) throws SQLException {
        new ReclamosDAO().UPDATEESTADO(i);
    }



    @RequestMapping(method = RequestMethod.PUT, value = "asignarReclamos/{nreclamo}")
    public void ASIGNARRECLAMO(@PathVariable("nreclamo") int i, @RequestBody Usuario u) throws SQLException {
        new ReclamosDAO().asignarReclamoAdmin(u,i);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "editarReclamo")
    public void modifificarReclamo (@RequestBody Reclamos a) throws SQLException {
    }

    //Metodos POST

    @RequestMapping(method = RequestMethod.POST, value = "create")
    public void CREATE(@RequestBody Reclamos r) throws SQLException {
        new ReclamosDAO().CREATE(r);
        String correoUser = new UsuarioDAO().obtenerCorreoPorRut(r.getRut());
        String body = "El reclamo ha sido ingresado con exito " +"\n Pronto un admin se comunicará con usted" +
                "para poder resolver su inquietud";
        sendEmailService.sendEmail("reclamos.chile.solutions@gmail.com",correoUser,"Reclamo Ingresado",body);
    }
    //Metodos DELETE
    @RequestMapping(method = RequestMethod.DELETE, value = "delete/{id}")
    public void DELETE(@PathVariable("id") int i) throws SQLException {
        new ReclamosDAO().DELETE(i);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "borrarReclamoRespuesta/{id}")
    public void borrarReclamoRespuesta(@PathVariable("id") int i) throws SQLException {
        try {
            new RespuestaDAO().DELETE(i);
            new ReclamosDAO().DELETE(i);

        } catch (SQLException e) {
            new ReclamosDAO().DELETE(i);
        }
    }

}
