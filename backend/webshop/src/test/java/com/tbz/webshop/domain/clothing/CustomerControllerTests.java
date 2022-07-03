package com.tbz.webshop.domain.clothing;

import com.tbz.webshop.domain.clothing.ClothingService;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.country.CountryRepository;
import com.tbz.webshop.domain.customer.Customer;
import com.tbz.webshop.domain.customer.CustomerDTO;
import com.tbz.webshop.domain.customer.CustomerRepository;
import com.tbz.webshop.domain.customer.CustomerService;
import com.tbz.webshop.domain.location.Location;
import com.tbz.webshop.domain.location.LocationRepository;
import org.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class CustomerControllerTests {

    private final String URL = "http://localhost:8080/customer/";
    @Autowired
    private MockMvc mvc;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    public LocationRepository locationRepository;
    @Autowired
    public CountryRepository countryRepository;


    /**
     * Tests if End point could create the greater region
     *
     * @throws Exception JSON Exception may occur
     */
    @Test
    @DisplayName("Endpoint Create for Greater Region")
    void registrateCustomer() throws Exception {
        CustomerDTO customerDTO = new CustomerDTO("Lena", "Meier", "lena.meier@mail.com",
                                                    "Industriestrasse 12", "mysuperpassword", "Switzerland", "Kloten");

        Country country = countryRepository.findByCountryName(customerDTO.getCountry());
        Location location = locationRepository.findByLocationName(customerDTO.getLocation());
        Customer customer = new Customer(customerDTO.getCustomerSurname(), customerDTO.getCustomerLastname(),
                customerDTO.getCustomerEmail(), customerDTO.getCustomerAddress(),
                encoder.encode(customerDTO.getPassword()),
                country, location);

        JSONObject requestJson = new JSONObject();
        requestJson.put("customerSurname","alisha").put(
                "customerLastname","khalid").put(
                "customerEmail","khalidalisha@gmail.com").put(
                "customerAddress","chreuzacherstrasse 13").put(
                "password", "123goodbye").put(
                "country" ,"England").put(
                "location","Lahore");

        mvc.perform(post(URL)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson.toString()))
                .andExpect(status().isMethodNotAllowed());

    }


}
