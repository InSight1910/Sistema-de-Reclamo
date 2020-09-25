package cl.RECLAMOS.Reclamos.JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/*
public class ConnectionManager {
    private static Connection connection = null;
    private static String connectionString = "jdbc:sqlserver://localhost:1433; databasename=RECLAMOS; " +
            "IntegratedSecurity=true";

    public static Connection obtenerConexion() throws SQLException {
        if(connection==null)
            connection = DriverManager.getConnection(connectionString);
        return connection;
    }
}*/
public class ConnectionManager {
    private static Connection connection = null;
    private static String connectionString = "jdbc:sqlserver://localhost:1433; databasename=RECLAMOS; " +
            "user=SA; password=<YourStrong@Passw0rd>";

    public static Connection obtenerConexion() throws SQLException {
        if(connection==null)
            connection = DriverManager.getConnection(connectionString);
        return connection;
    }
}