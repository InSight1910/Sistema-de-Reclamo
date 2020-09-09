package cl.RECLAMOS.Reclamos.API;


import cl.RECLAMOS.Reclamos.JDBC.DAO.UsuarioDAO;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Reclamos;
import cl.RECLAMOS.Reclamos.JDBC.DTO.SendEmailService;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.sql.SQLException;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*",maxAge = 3600)
public class UsuarioResource {
    @Autowired
    private SendEmailService sendEmailService;

    @RequestMapping(method = RequestMethod.PUT, value = "editarUsuario")
    public void modifificarUsuario (@RequestBody Usuario a) throws SQLException {
        new UsuarioDAO().modificar(a);
    }

    @RequestMapping(method = RequestMethod.GET, value = "usuarios/{rut}")
    public List<Usuario> getUsuarios (@PathVariable("rut") String rut) throws SQLException {
        List<Usuario> user = new UsuarioDAO().obtenerUserPorRut(rut);
        return user;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "borrarUser/{rut}")
    public void borrarUsuario(@PathVariable("rut") String rut) throws SQLException {
        new UsuarioDAO().borrarUser(rut);
    }


    @RequestMapping(method = RequestMethod.POST, value = "registrar")
    public void crearUsuario ( @RequestBody Usuario u) throws SQLException {
        new UsuarioDAO().crearUsuario(u);
        String correoUser = new UsuarioDAO().obtenerCorreoPorRut(u.getRut());
        String body = "Sr.(a) "+u.getNombre() +"\nSu cuenta ha sido creada exitosamente.\nEsperamos ser de mucha ayuda para usted." +
                "\n\nAtentamente el equipo de ReclamosChile.";

        sendEmailService.sendEmail("reclamos.chile.solutions@gmail.com",correoUser,"Registro ReclamosChile",body);
    }

    @RequestMapping(method = RequestMethod.POST, value = "loginAdmin")
    public Usuario loginAdmin(@RequestBody Usuario u) throws SQLException {
        return new UsuarioDAO().loginAdmin(u);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/usuario/editarContraseña")
    public void editarContraseña (@RequestBody Usuario c) throws SQLException {
        new UsuarioDAO().editarContraseña(c);
        String correoUser = new UsuarioDAO().obtenerCorreoPorRut(c.getRut());
        String body = "\nSu contraseña ha sido actualizado con éxito. \n Su nueva contraseña es " +c.getContrasenha();
        sendEmailService.sendEmail("reclamos.chile.solutions@gmail.com",c.getCorreo(),"Cambio de contraseña ReclamosChile",body);


    }


    @RequestMapping(method = RequestMethod.POST, value = "loginUsuario")
    public Usuario loginUsuario(@RequestBody Usuario a) throws SQLException {
        return new UsuarioDAO().loginUsuario(a);
    }

    @RequestMapping(method = RequestMethod.GET, value = "obtenerCorreo/{rut}")
    public String getCorreoPorRut(@PathVariable("rut") String rut) throws SQLException{
      return new UsuarioDAO().obtenerCorreoPorRut(rut);
    }

}
