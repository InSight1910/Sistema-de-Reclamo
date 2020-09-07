package cl.RECLAMOS.Reclamos.JDBC.DTO;

public class Usuario {

    private String correo;
    private String nombre;
    private String contrasenha;
    private String rut;
    private String rol;
    private String numTelefono;
    private String direccion;


    public Usuario(String correo, String nombre, String contrasenha, String rut, String rol, String numTelefono, String direccion) {
        this.correo = correo;
        this.nombre = nombre;
        this.contrasenha = contrasenha;
        this.rut = rut;
        this.rol = rol;
        this.numTelefono = numTelefono;
        this.direccion = direccion;
    }

    public String getCorreo() {
        return correo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getContrasenha() {
        return contrasenha;
    }

    public String getRut() {
        return rut;
    }

    public String getRol() {
        return rol;
    }

    public String getNumTelefono() {
        return numTelefono;
    }

    public String getDireccion() {
        return direccion;
    }
}
