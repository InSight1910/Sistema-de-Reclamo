package cl.RECLAMOS.Reclamos.JDBC.DTO;

import java.sql.Date;

public class Reclamos {
    private String TipoReclamo;
    private int NumeroReclamo;
    private String Descripcion;
    private Date Fecha;
    private String Estado;
    private String Antecedentes;
    private String Rut;
    private Date Fecha_tope;
    private String Comentarios;



    public String getTipoReclamo() {
        return TipoReclamo;
    }

    public void setTipoReclamo(String tipoReclamo) {
        TipoReclamo = tipoReclamo;
    }

    public int getNumeroReclamo() {
        return NumeroReclamo;
    }

    public void setNumeroReclamo(int numeroReclamo) {
        NumeroReclamo = numeroReclamo;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public Date getFecha() {
        return Fecha;
    }

    public void setFecha(Date fecha) {
        Fecha = fecha;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

    public String getAntecedentes() {
        return Antecedentes;
    }

    public void setAntecedentes(String antecedentes) {
        Antecedentes = antecedentes;
    }

    public String getRut() {
        return Rut;
    }

    public void setRut(String rut) {
        Rut = rut;
    }

    public Date getFecha_tope() {
        return Fecha_tope;
    }

    public void setFecha_tope(Date fecha_tope) {
        Fecha_tope = fecha_tope;
    }

    public String getComentarios() {
        return Comentarios;
    }

    public void setComentarios(String comentarios) {
        Comentarios = comentarios;
    }

    public Reclamos(String tipoReclamo, Date fecha_tope, int numeroReclamo, String descripcion, Date fecha, String estado, String antecedentes, String rut, String comentarios) {
        TipoReclamo = tipoReclamo;
        NumeroReclamo = numeroReclamo;
        Descripcion = descripcion;
        Fecha = fecha;
        Estado = estado;
        Antecedentes = antecedentes;
        Rut = rut;
        Fecha_tope = fecha_tope;
        Comentarios = comentarios;
    }
}
