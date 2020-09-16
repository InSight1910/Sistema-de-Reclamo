package cl.RECLAMOS.Reclamos.JDBC.DTO;

import java.sql.Date;

public class Respuesta {
    private Integer N_reclamo;
    private String Rut;
    private String Texto;
    private Date Fecha_respuesta;


    public Integer getN_reclamo() {
        return N_reclamo;
    }

    public void setN_reclamo(Integer n_reclamo) {
        N_reclamo = n_reclamo;
    }

    public String getRut() {
        return Rut;
    }

    public void setRut(String rut) {
        Rut = rut;
    }

    public String getTexto() {
        return Texto;
    }

    public void setTexto(String texto) {
        Texto = texto;
    }

    public Date getFecha_respuesta() {
        return Fecha_respuesta;
    }

    public void setFecha_respuesta(Date fecha_respuesta) {
        Fecha_respuesta = fecha_respuesta;
    }


    public Respuesta(Integer n_reclamo, String rut, String texto, Date fecha_respuesta) {
        N_reclamo = n_reclamo;
        Rut = rut;
        Texto = texto;
        Fecha_respuesta = fecha_respuesta;
    }
}
