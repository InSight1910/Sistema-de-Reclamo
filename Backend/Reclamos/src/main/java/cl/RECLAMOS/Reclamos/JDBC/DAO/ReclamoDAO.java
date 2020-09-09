package cl.RECLAMOS.Reclamos.JDBC.DAO;

import cl.RECLAMOS.Reclamos.JDBC.ConnectionManager;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Reclamos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class ReclamoDAO {
    private Connection conn;
    public ReclamoDAO() throws SQLException {
        conn = ConnectionManager.obtenerConexion();
    }

    public List<Reclamos> GETADMIN() throws SQLException {
        String sql = "select * from RECLAMOS where ESTADO = 'Pendiente' order by FECHA DESC";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getString("COMENTARIOS")

            );
            r.add(re);
        }
        return  r;
    }
    public List<Reclamos> GETUSER(String i) throws SQLException {
        String sql = "select * from RECLAMOS where RUT like ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, i+ "%");
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getString("COMENTARIOS")
            );
            r.add(re);
        }
        return  r;
    }
    public List<Reclamos> GETxRECLAMO(int i) throws SQLException {
        String sql = "select * from RECLAMOS where NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getString("COMENTARIOS")
            );
            r.add(re);
        }
        return  r;
    }
    public void CREATE(Reclamos r) throws SQLException{
        String sql = "INSERT INTO RECLAMOS(TIPORECLAMO,[DESCRIPCION],[FECHA],[ESTADO],[ANTECEDENTES],[RUT]) VALUES(?,?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,r.getTipoReclamo());
        ps.setString(2,r.getDescripcion());
        ps.setDate(3,r.getFecha());
        ps.setString(4,r.getEstado());
        ps.setString(5,r.getAntecedentes());
        ps.setString(6,r.getRut());
        ps.executeUpdate();
    }
    public void UPDATE(Reclamos r, int i) throws SQLException {
        String sql = "UPDATE RECLAMOS" +
                " SET TIPORECLAMO = ?, DESCRIPCION = ? WHERE NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, r.getTipoReclamo());
        ps.setString(2, r.getDescripcion());
        ps.setInt(3,i);
        ps.executeUpdate();
    }
    public void UPDATEESTADO(int i) throws SQLException {
        String sql = "UPDATE RECLAMOS SET ESTADO = 'Resuelto' WHERE NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,i);
        ps.executeUpdate();
    }
    public void DELETE(int i) throws SQLException {
        String sql = "DELETE from RECLAMOS " +
                "WHERE NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ps.executeUpdate();
    }


    public void modificarAntecedente(Reclamos u) throws SQLException {
        String sql = "update reclamos set ANTECEDENTES = ? where NUMERORECLAMO =?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, u.getAntecedentes());
        ps.setInt(2, u.getNumeroReclamo());
        ps.executeUpdate();
    }
}
