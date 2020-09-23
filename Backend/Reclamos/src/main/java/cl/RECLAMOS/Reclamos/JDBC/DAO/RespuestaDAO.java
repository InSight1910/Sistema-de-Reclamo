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



    public void createRespuesta(Respuesta r) throws SQLException, ParseException {
        String fecha = "(cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(dd ,getDAte())as varchar) as Date)) ";
        String sql = "Insert into RESPUESTA(N_RECLAMO, RUT, TEXTO, FECHA_RESPUESTA) VALUES(?,?,?," + fecha +")";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,r.getN_reclamo());
        ps.setString(2,r.getRut());
        ps.setString(3, r.getTexto());
        ps.executeUpdate();
        conn.commit();
    }
    public void getFecha(int i) throws SQLException {
        String sql = "select Fecha_respuesta, Fecha_tope from Respuesta Re inner join RECLAMOS r on r.NUMERORECLAMO = re.N_RECLAMO where N_reclamo = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ResultSet rs = ps.executeQuery();

        while (rs.next()){

            Date fecha = rs.getDate("Fecha_respuesta");
            Date fechaTope = rs.getDate("Fecha_tope");
            int comparacion = fecha.compareTo(fechaTope);
            if (comparacion <= 0){
                String sql1 = "update Reclamos set SERVICIO = 'Eficiente' where NUMERORECLAMO = ?";
                ps = conn.prepareStatement(sql1);
                ps.setInt(1, i);
                ps.executeUpdate();

            }
        }

    }


    public void DELETE(int i) throws SQLException {
          /*
        Metodo para borrar una Respuesta por medio de el numero de reclamo
         */
        String sql = "delete from RESPUESTA where N_RECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,i);
        ps.executeUpdate();
    }
}
