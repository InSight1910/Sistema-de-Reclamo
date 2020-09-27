package cl.RECLAMOS.Reclamos.JDBC.DAO;


import cl.RECLAMOS.Reclamos.JDBC.ConnectionManager;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Reclamos;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Usuario;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


public class ReclamosDAO {
    private Connection conn;

    // Contructor que genera conexion a la DB
    public ReclamosDAO() throws SQLException {
        conn = ConnectionManager.obtenerConexion();
    }

    //Metodo GET
    public List<Reclamos> GETADMIN() throws SQLException {
        /*
        Con este metodo traemos todos los reclamos Pendientes para que luego el admin pueda ver todos los reclamos en estado Pendiente
         */
        String sql = "select * from RECLAMOS where ESTADO = 'Pendiente' order by FECHA desc";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getString("COMENTARIOS"),
                    rs.getString("RUT_ADMIN"),
                    rs.getString("SERVICIO")
            );
            r.add(re);
        }
        return  r;
    }
    public List<Reclamos> GETUSER(String i) throws SQLException {
        /*
        Este metodo trae todos los reclamos que tenga el usuario que inicia sesion
         */
        String sql = "select * from RECLAMOS where RUT = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, i);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getString("COMENTARIOS"),
                    rs.getString("RUT_ADMIN"),
                    rs.getString("SERVICIO")
            );
            r.add(re);
        }
        return  r;
    }
    public List<Reclamos> GETxRECLAMO(int i) throws SQLException {
        /*
        Este metodo trae un reclamo en base a el numero de reclamo
         */
        String sql = "select * from RECLAMOS where NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getString("COMENTARIOS"),
                    rs.getString("RUT_ADMIN"),
                    rs.getString("SERVICIO")
            );
            r.add(re);
        }
        return  r;
    }
    public List<Reclamos> GETxADMIN(String rutAdmin) throws SQLException {
        /*
        Con este metodo traemos todos los Reclamos que el Admin se asigna para encargarce de ellos
         */
        String sql = "select * from RECLAMOS where RUT_ADMIN = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, rutAdmin);
        ResultSet rs = ps.executeQuery();
        List<Reclamos> r = new ArrayList<>();
        while (rs.next()){
            Reclamos re = new Reclamos(
                    rs.getString("TIPORECLAMO"),
                    rs.getInt("NUMERORECLAMO"),
                    rs.getString("DESCRIPCION"),
                    rs.getDate("FECHA_TOPE"),
                    rs.getString("ESTADO"),
                    rs.getString("ANTECEDENTES"),
                    rs.getString("RUT"),
                    rs.getDate("FECHA"),
                    rs.getString("COMENTARIOS"),
                    rs.getString("RUT_ADMIN"),
                    rs.getString("SERVICIO")
            );
            r.add(re);
        }
        return  r;
    }

    //Metodo POST
    public void CREATE(Reclamos r) throws SQLException{
        //Metodo que crea un reclamo
        String fecha = "(cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(dd ,getDAte())as varchar) as Date)) ";
        String FechaTope = "(cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(day, DATEADD(day, 2, getdate())) as varchar) as Date))";
        String sql = "insert into RECLAMOS(TIPORECLAMO,[DESCRIPCION],[FECHA],[FECHA_TOPE],[ESTADO],[RUT]) values(?,?,"+ fecha +","+FechaTope+",'Pendiente',?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,r.getTipoReclamo());
        ps.setString(2,r.getDescripcion());
        ps.setString(3, r.getRut());
        ps.executeUpdate();
    }

    //Metodo Put

    public void UPDATEESTADO(int i) throws SQLException {
        /*
        Metodo que actualiza el estado a Resuelto
         */
        String sql = "update RECLAMOS set ESTADO = 'Resuelto' WHERE NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,i);
        ps.executeUpdate();
    }


    public void asignarReclamoAdmin(Usuario u, int i) throws SQLException {
        /*
        Metodo con el cual el admin puede asignarce Reclamos para poder resolverlos
         */
        String sql = "update RECLAMOS set RUT_ADMIN = ?, ESTADO = 'En revision' where NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, u.getRut());
        ps.setInt(2, i);
        ps.executeUpdate();
    }

    public void modificar(Reclamos a) throws SQLException {
        /*
        Metodo que actualiza el tipo de reclamo, la descripcion y el comentario en base a el numero de reclamo
         */
        String sql = "update RECLAMOS set TIPORECLAMO = ?, DESCRIPCION = ?, COMENTARIOS = ? where NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, a.getTipoReclamo());
        ps.setString(2, a.getDescripcion());
        ps.setString(3, a.getComentarios());
        ps.setInt(4, a.getNumeroReclamo());
        ps.executeUpdate();
    }

    //Metodo DELETE
    public void DELETE(int i) throws SQLException {
        /*
        Metodo para eliminar Reclamo en base a el numero de reclamo
         */
        String sql = "delete from RECLAMOS where NUMERORECLAMO = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, i);
        ps.executeUpdate();
    }




}
