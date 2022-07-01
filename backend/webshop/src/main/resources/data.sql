INSERT INTO public.location (location_id,location_name,postal_code) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35280'::uuid,'Kloten','8302'),
('cddc5aa2-f873-4a85-af23-1aadfec89bcb'::uuid,'Bassersdorf','8303'),
('98517b80-3c78-4e2a-90bc-b6f9efb5a851'::uuid,'Zurich','8005'),
('840ba36c-6629-4422-bcf6-40ea6fa639aa'::uuid,'Winterthur','8400'),
('1eeda6d1-73d1-43a5-9d2c-1d918ef4cf40'::uuid,'Dietlikon','8952'),
('55fb0db6-7cb8-4c79-b352-379f10a38d66'::uuid,'Uster','8610'),
('c4e67686-d334-4060-9575-48a7a06590f2'::uuid,'Duebendorf','8600'),
('ce79eeaf-913d-4906-95bf-a798d99f886e'::uuid,'Buelach','8180'),
('b2ec0af0-1270-4435-b3fc-ebfe0bf23334'::uuid,'Islamabad','44100'),
('8dc7f1ee-b5f6-495f-8713-b2fb042496a2'::uuid,'Lahore','53201'),
('636bd9be-5fee-441e-b92c-3e54a027557a'::uuid,'Karachi','74200'),
('e22c57c1-2748-48db-b8b3-053b9d67f60a'::uuid,'Paris','75001'),
('f32dfde4-eee8-4812-9a7b-15acd85fd52e'::uuid,'London','EC1A'),
('0828879b-8199-4fde-8752-5b874c4d18fe'::uuid,'Rome','13440'),
('be40ed33-0d33-45f9-bfbe-35f648cf4747'::uuid,'Berlin','10115');
INSERT INTO public.country (country_id,country_name) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'Switzerland'),
('abf9b3a1-d848-4640-937c-f7e764c02a2c'::uuid,'Pakistan'),
('c81cbd0d-57c5-4763-8179-4bde283b4f71'::uuid,'France'),
('f5d33a92-cc45-41f0-8411-5f365a7275e5'::uuid,'England'),
('49ee41e2-a7a9-4174-b700-dcfaf3e36298'::uuid,'Italy'),
('caba0bc5-cbed-4ab1-944f-90810ae6906d'::uuid,'Germany');

INSERT INTO public.customer (customer_id,customer_address,customer_email,customer_lastname,customer_password,customer_surname,id_country,id_location) VALUES
('2c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'Bahnhofstrasse 12','myemail@email.com','Lankan','1234567','Kalyani','4c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid,'4c0a64eb-0f61-44f6-96a4-35ac62b35280'::uuid);

INSERT INTO public.cart (cart_id,shipping_price,total_price, id_customer) VALUES
('4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,0.0,120.0, '2c0a64eb-0f61-44f6-96a4-35ac62b35281'::uuid);

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

