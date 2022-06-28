INSERT INTO public.location (location_id,location_name,postal_code) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35280'::uuid,'Kloten','8302');

INSERT INTO public.country (country_id,country_name) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'Schweiz');

INSERT INTO public.cart (cart_id,shipping_price,total_price) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,0.0,120.0);

INSERT INTO public.customer (customer_id,customer_address,customer_email,customer_lastname,customer_password,customer_surname,id_cart,id_country,id_location) VALUES
('2c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'Bahnhofstrasse 12','myemail@email.com','Lankan','1234567','Kalyani','4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,'4c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'4c0a64eb-0f61-44f6-96a4-35ac62b35280'::uuid);

INSERT INTO public.ordering (ordering_id,ordering_date,ordering_price,ordering_time,id_cart,id_customer) VALUES
('b7b36b94-f641-11ec-b939-0242ac120003'::uuid,'2022-09-12 00:00:00',123.0,'12:23:00','4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,'2c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid);

INSERT INTO public.clothing_size (clothing_size_id,clothing_size) VALUES
('b7b36b94-f641-11ec-b939-0242ac120002'::uuid,'XL');

INSERT INTO public.clothing_type (clothing_type_id, clothing_type)VALUES
('bcc8ed58-f6d6-11ec-b939-0242ac120002', 'FORMAL');

INSERT INTO public.clothing (clothing_id,clothing_description,clothing_name,clothing_price,id_clothing_size, id_clothing_type) VALUES
    ('090f3d7c-f6ad-11ec-b939-0242ac120002'::uuid,'This kameez is very charmant and a beautiful color','Kameez',12.0,'b7b36b94-f641-11ec-b939-0242ac120002'::uuid, 'bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid);

INSERT INTO public.cart_clothing (cart_clothing_id,amount,id_cart,id_clothing) VALUES
('340691a8-f642-11ec-b939-0242ac120002'::uuid,3,'4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,'090f3d7c-f6ad-11ec-b939-0242ac120002'::uuid);

