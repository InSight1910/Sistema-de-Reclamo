package cl.RECLAMOS.Reclamos.JDBC.DAO;

import cl.RECLAMOS.Reclamos.JDBC.ConnectionManager;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Respuesta;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;

public class RespuestaDAO {
    private Connection conn;
    public RespuestaDAO() throws SQLException {
        conn = ConnectionManager.obtenerConexion();
    }

    public List<Respuesta> getRespuesta(int i) throws SQLException {
        String sql = "SELECT * FROM RESPUESTA WHERE N_RECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ResultSet rs = ps.executeQuery();
        List<Respuesta> res = new LinkedList<>();
        while (rs.next()){
            Respuesta r = new Respuesta(rs.getInt("N_RECLAMO"),rs.getString("RUT"),rs.getString("TEXTO"), rs.getDate("FECHA_RESPUESTA"));
            res.add(r);
        }
        return res;
    }
    public Date parseDate(String fecha) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
        Date newfecha = (Date) format.parse(fecha);
        return newfecha;
    }

    public void createRespuesta(Respuesta r) throws SQLException, ParseException {
        String sql = "Insert into RESPUESTA(N_RECLAMO, RUT, TEXTO, FECHA_RESPUESTA) VALUES(?,?,?, (cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(dd ,getDAte())as varchar) as Date)))";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,r.getN_reclamo());
        ps.setString(2,r.getRut());
        ps.setString(3, r.getTexto());
        ps.executeUpdate();
    }
}
