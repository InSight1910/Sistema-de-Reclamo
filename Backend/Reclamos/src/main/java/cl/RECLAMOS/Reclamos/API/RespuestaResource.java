package cl.RECLAMOS.Reclamos.API;

import cl.RECLAMOS.Reclamos.JDBC.DAO.RespuestaDAO;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Respuesta;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/")
public class RespuestaResource {
    @RequestMapping(method = RequestMethod.GET, value = "getRespuesta/{n_reclamo}")
    public List<Respuesta> GETALL(@PathVariable("n_reclamo") int i) throws SQLException {
        List<Respuesta> r = new RespuestaDAO().getRespuesta(i);
        return r;
    }
    @RequestMapping(method = RequestMethod.POST, value = "createRespuesta")
    public void CREATE(@RequestBody Respuesta r) throws SQLException, ParseException {
        new RespuestaDAO().createRespuesta(r);
        new RespuestaDAO().getFecha(r.getN_reclamo());
    }
}
