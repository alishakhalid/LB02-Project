package com.tbz.webshop.config;


import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;

/**
 * Used to map enums from the spring boot application into the postgresql database.
 * These enums will be mapped from an enum in the spring boot application to an enum in the
 * postgresql database, which has been created in a migration file.
 *
 * <p>Source: https://vladmihalcea.com/the-best-way-to-map-an-enum-type-with-jpa-and-hibernate/#:~:text=Mapping%20a%20Java%20Enum%20to%20a%20database%2Dspecific%20Enumerated%20column%20type
 */
public class PostgreSQLEnumType extends org.hibernate.type.EnumType {

    /**
     * Overridden method, which handles the transformation from Java Enum to Postgres Enum.
     */
    public void nullSafeSet(
            PreparedStatement st,
            Object value,
            int index,
            SharedSessionContractImplementor session)
            throws HibernateException, SQLException {
        st.setObject(
                index,
                value != null ?
                        ((Enum) value).name() :
                        null,
                Types.OTHER
        );
    }
}

