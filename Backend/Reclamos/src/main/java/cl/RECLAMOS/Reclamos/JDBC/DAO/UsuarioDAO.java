package cl.RECLAMOS.Reclamos.JDBC.DAO;

import cl.RECLAMOS.Reclamos.JDBC.ConnectionManager;
import cl.RECLAMOS.Reclamos.JDBC.DTO.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

public class UsuarioDAO {

    private static Connection connection;
    //Contructor que genera conexion a la DB
    public UsuarioDAO() throws SQLException {
        this.connection = ConnectionManager.obtenerConexion();

    }
    //Metodo GET
    public List<Usuario> obtenerUserPorRut(String rut) throws SQLException {
        String sql = "select CORREO, NOMBRE, CONTRASEÑA, RUT, ROL, NUMEROTELEFONO, DIRECCION from USUARIOS where RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, rut);
        ResultSet rs = ps.executeQuery();
        List<Usuario> usuarios = new LinkedList<>();
        while (rs.next()) {
            Usuario p = new Usuario(
                    rs.getString("CORREO"),
                    rs.getString("NOMBRE"),
                    rs.getString("CONTRASEÑA"),
                    rs.getString("RUT"),
                    rs.getString("ROL"),
                    rs.getString("NUMEROTELEFONO"),
                    rs.getString("DIRECCION")
            );
            usuarios.add(p);
        }
        return usuarios;
    }
    public Usuario loginAdmin(Usuario u) throws SQLException {
        String sql = "select * from USUARIOS where CORREO = '" + u.getCorreo() + "' and CONTRASEÑA = '" + u.getContrasenha() + "' and ROL = 'Admin'";
        PreparedStatement ps = connection.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        rs.next();
        String correoU = rs.getString("CORREO");
        String nombresU = rs.getString("NOMBRE");
        String contrasenhaU = null;
        String rutU = rs.getString("RUT");
        String rolU = rs.getString("ROL");
        String numTelefonoU = rs.getString("NUMEROTELEFONO");
        String direccionU = rs.getString("DIRECCION");

        return new Usuario(correoU, nombresU, contrasenhaU, rutU, rolU, numTelefonoU, direccionU);
    }

    public Usuario loginUsuario(Usuario a) throws SQLException {
        String sql = "select * from USUARIOS where CORREO = '" + a.getCorreo() + "' and CONTRASEÑA = '" + a.getContrasenha() + "' and ROL = 'Usuario'";
        PreparedStatement ps = connection.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        rs.next();
        String correoA = rs.getString(1);
        String nombresA = rs.getString(2);
        String contrasenhaA = rs.getString(3);
        String rutA = rs.getString(4);
        String rolA = rs.getString(5);
        String numTelefonoA = rs.getString(6);
        String direccionA = rs.getString(7);

        return new Usuario(correoA, nombresA, contrasenhaA, rutA, rolA, numTelefonoA, direccionA);
    }
    public String obtenerCorreoPorRut(String rut) throws SQLException {
        String sql = "select CORREO from USUARIOS where RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, rut);
        ResultSet correo = ps.executeQuery();
        String correo1 = "";
        while (correo.next()) {
            correo1 = correo.getString("CORREO");
        }
        return correo1;
    }

    //Metodo PUT
    public void modificar(Usuario a) throws SQLException {
        String sql = "update USUARIOS set CORREO = ?, NOMBRE = ?, CONTRASEÑA = ?, ROL = ?, NUMEROTELEFONO = ?, DIRECCION = ? where RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, a.getCorreo());
        ps.setString(2, a.getNombre());
        ps.setString(3, a.getContrasenha());
        ps.setString(4, a.getRol());
        ps.setString(5, a.getNumTelefono());
        ps.setString(6, a.getDireccion());
        ps.setString(7, a.getRut());
        ps.executeUpdate();
    }
    public void editarContraseña(Usuario c) throws SQLException {
        String sql = "update USUARIOS set CONTRASEÑA = ? where CORREO = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, c.getContrasenha());
        ps.setString(2, c.getCorreo());
        ps.executeUpdate();
    }

    // Metodo DELETE
    public void borrarUser(String rut) throws SQLException {
        String sql = "delete from USUARIOS where RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, rut);
        ps.executeUpdate();
    }
    public void borrarUserPorCorreo(String correo) throws SQLException {
        String sql = "delete from USUARIOS where CORREO = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, correo);
        ps.executeUpdate();
    }

    // Metodo POST
    public void crearUsuario(Usuario u) throws SQLException {
        String sql = "insert into USUARIOS (CORREO, NOMBRE, CONTRASEÑA, RUT, ROL, NUMEROTELEFONO, DIRECCION) values(?, ?, ?, ?, 'Usuario', ?, ?)";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, u.getCorreo());
        ps.setString(2, u.getNombre());
        ps.setString(3, u.getContrasenha());
        ps.setString(4, u.getRut());
        ps.setString(5, u.getNumTelefono());
        ps.setString(6, u.getDireccion());
        ps.executeUpdate();

    }

    public boolean CorreoExiste(String correo) throws SQLException {
        String sql = "Select * from usuarios where correo = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, correo);
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            return true;
            //SI ENTRA ES PORQUE LA HORA ESTÁ TOMADA
        } return false;//QUIERE DECIR QUE LA HORA NO ESTÁ TOMADA;
    }
}





    








