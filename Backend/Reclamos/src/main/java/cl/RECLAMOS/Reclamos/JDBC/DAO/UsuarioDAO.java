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

    public UsuarioDAO() throws SQLException {
        this.connection = ConnectionManager.obtenerConexion();

    }

    public static Usuario modificar(Usuario a) throws SQLException {
        String sql = "UPDATE USUARIOS SET CORREO = ?, NOMBRE = ?, CONTRASEÑA = ?, ROL = ?, NUMEROTELEFONO = ?, DIRECCION = ? where RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, a.getCorreo());
        ps.setString(2, a.getNombre());
        ps.setString(3, a.getContrasenha());
        ps.setString(4, a.getRol());
        ps.setString(5, a.getNumTelefono());
        ps.setString(6, a.getDireccion());
        ps.setString(7, a.getRut());
        ps.executeUpdate();
        return null;
    }

    private List<Usuario> obtenerResultados(String sql, String parametro) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, parametro);
        ResultSet rs = ps.executeQuery();
        List<Usuario> usuarios = new LinkedList<>();
        while (rs.next()){
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

    public List<Usuario> obtenerUserPorRut(String rut) throws SQLException {
        String sql = "Select CORREO, NOMBRE, CONTRASEÑA, RUT, ROL, NUMEROTELEFONO, DIRECCION FROM USUARIOS WHERE RUT = ?";
        return obtenerResultados(sql, rut);
    }

    public void borrarUser(String rut) throws SQLException {
        String sql = "delete from USUARIOS WHERE RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, rut);
        ps.executeUpdate();
    }

    public void crearUsuario(Usuario u) throws SQLException {
        String sql = "INSERT INTO USUARIOS (CORREO, NOMBRE, CONTRASEÑA, RUT, ROL, NUMEROTELEFONO, DIRECCION)" +
                "VALUES (?, ?, ?, ?, 'Usuario', ?, ?)";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, u.getCorreo());
        ps.setString(2, u.getNombre());
        ps.setString(3, u.getContrasenha());
        ps.setString(4, u.getRut());
        ps.setString(5, u.getNumTelefono());
        ps.setString(6, u.getDireccion());
        ps.executeUpdate();

    }


    public static Usuario loginAdmin(Usuario u) throws SQLException {
        String sql = "SELECT * FROM USUARIOS WHERE CORREO = '" + u.getCorreo() + "' AND CONTRASEÑA = '" + u.getContrasenha() +
                "' AND ROL = 'Admin'";
              PreparedStatement ps = connection.prepareStatement(sql);
              ResultSet rs = ps.executeQuery();
              rs.next();
              String correoU = rs.getString(1);
              String nombresU = rs.getString(2);
              String contrasenhaU = rs.getString(3);
              String rutU = rs.getString(4);
              String rolU = rs.getString(5);
              String numTelefonoU = rs.getString(6);
              String direccionU = rs.getString(7);

              return new Usuario(correoU, nombresU, contrasenhaU, rutU, rolU, numTelefonoU, direccionU);
    }

    public Usuario loginUsuario(Usuario a) throws SQLException {
        String sql = "SELECT * FROM USUARIOS WHERE CORREO = '" + a.getCorreo() + "' AND CONTRASEÑA = '" + a.getContrasenha() +
                "' AND ROL = 'Usuario'";
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
        String sql = "SELECT CORREO FROM USUARIOS WHERE RUT = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, rut);
        ResultSet correo = ps.executeQuery();
        String correo1 = "";
        while(correo.next()){
            correo1 = correo.getString("CORREO");
        }
        return correo1;
    }

}
