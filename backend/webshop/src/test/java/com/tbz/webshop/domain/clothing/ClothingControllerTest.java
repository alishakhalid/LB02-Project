package com.tbz.webshop.domain.clothing;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
@RunWith(SpringRunner.class)

@AutoConfigureMockMvc
@WebMvcTest
public class ClothingControllerTest {

    @MockBean
    private ClothingServiceImpl service;

    @Autowired
    private MockMvc mvc;

    private final String URL = "http://localhost:8080/clothing";

    @Test
    @Transactional
    @Sql("/TestData.sql")
    void findAllClothingItems() throws Exception {

        //WHEN
        MvcResult res = mvc.perform(get("/clothing/{id}", 1)).andReturn();
        //THEN
        Assert.assertEquals(200, res.getResponse().getStatus());
        Assert.assertTrue(res.getResponse().getContentAsString().contains("passing the test"
        ));
    }

}