package cl.RECLAMOS.Reclamos.API;

import cl.RECLAMOS.Reclamos.JDBC.DAO.ReclamoDAO;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Reclamos;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ReclamosResource {
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

    @RequestMapping(method = RequestMethod.DELETE, value = "delete/{id}")
    public void DELETE(@PathVariable("id") int i) throws SQLException {
        new ReclamoDAO().DELETE(i);
    }

    @RequestMapping(method = RequestMethod.POST, value = "create")
    public void CREATE(@RequestBody Reclamos r) throws SQLException {
        new ReclamoDAO().CREATE(r);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "update/{id}")
    public void UPDATE(@PathVariable("id") int i, @RequestBody Reclamos r) throws SQLException {
        new ReclamoDAO().UPDATE(r, i);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "updateEstado/{id}")
    public void UPDATE(@PathVariable("id") int i) throws SQLException {
        new ReclamoDAO().UPDATEESTADO(i);
    }
    public void UPDATE()
}
