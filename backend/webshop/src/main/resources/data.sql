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
('b7b36b94-f641-11ec-b939-0242ac120002'::uuid,'XL'),
('64cce70f-ff3f-4a68-bc6a-b6cfae4051b4'::uuid,'L'),
('8ece0772-2251-43e5-855b-eaf4e9684ca8'::uuid,'M'),
('a88378bf-09b0-4fc7-a1be-0388a8a6ebfb'::uuid,'S'),
('d1cc2e67-956d-433b-a3ee-2129014acd04'::uuid,'XS');

INSERT INTO public.clothing_type (clothing_type_id, clothing_type)VALUES
('bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid, 'FORMAL'),
('eee3dac1-8301-4093-ab01-0f191c745db2'::uuid, 'CASUAL'),
('d03cae72-ffc3-46ee-9f90-9b56cbe8211a'::uuid, 'STICHED'),
('3d55bf07-b833-4aa0-9f3e-670ec6630960'::uuid, 'UNSTICHED');

INSERT INTO public.clothing (clothing_id,clothing_description,clothing_image,clothing_name,clothing_price,id_clothing_size, id_clothing_type) VALUES
('090f3d7c-f6ad-11ec-b939-0242ac120002'::uuid,
 'A 4 piece lilac bridal consisting of an elaborate kameez paired with a heavily embroidered farshi gharara set on a stunning organza base complimented with a lilac dupatta.',
 'https://i.pinimg.com/736x/41/86/80/418680c973c18fbf2aab67acd367ef19.jpg',
 'Bahar-e-Nau',
 120.00,
 'b7b36b94-f641-11ec-b939-0242ac120002'::uuid,
 'bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid),
('82c45353-c3df-489a-bc96-317b8873bc3d'::uuid,
 'A 3 piece unstitched red suit',
 'https://cdn.shopify.com/s/files/1/2337/7003/products/87_3acea76a-cfff-4f86-8f12-62d91e5c3e6c_700x.jpg?v=1647945606',
 'Bano',
 130.50,
 'd1cc2e67-956d-433b-a3ee-2129014acd04'::uuid,
 '3d55bf07-b833-4aa0-9f3e-670ec6630960'::uuid),
('56919609-d6b7-4dc5-a1d9-2edefd91b8fa'::uuid,
 'A 3 piece unstitched blue suit perfect for summer',
 'https://cdn.shopify.com/s/files/1/2337/7003/products/FTA-15-02_800x1200_e44deb31-d94d-4ee2-9a38-da9d75c1e074_700x.webp?v=1648151326',
 'Santorini Blue Dream',
 45.90,
 'b7b36b94-f641-11ec-b939-0242ac120002'::uuid,
 '3d55bf07-b833-4aa0-9f3e-670ec6630960'::uuid),
('eee3dac1-8301-4093-ab01-0f191c745db2'::uuid,
 'Elevate your wardrobe with this beautiful semi-formal shirt, rendered in a gorgeous pink hue, finished with unique embroidery all over.',
 'https://www.sanasafinaz.com/media/catalog/product/s/s/ss22ese316_1_.jpg?width=613&height=920&canvas=613:920&optimize=medium&bg-color=255,255,255&fit=bounds',
 'Pink Bloom',
 80.00,
 '64cce70f-ff3f-4a68-bc6a-b6cfae4051b4'::uuid,
 'bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid),
('34ab33cc-92e1-47c6-ba19-89537416cd08'::uuid,
 'A 3 piece unstitched yellow suit perfect for summer complimented with a blue dubatta',
 'https://cdn.shopify.com/s/files/1/2337/7003/products/FTA-03-01_800x1200_24bfdb39-d9aa-4a12-8904-0c594321b8bf_700x.jpg?v=1645726659',
 'Garmi',
 100.00,
 '8ece0772-2251-43e5-855b-eaf4e9684ca8'::uuid,
 '3d55bf07-b833-4aa0-9f3e-670ec6630960'::uuid),
('40d37a47-dfe4-47c3-9e47-11b803566774'::uuid,
 'A fashionable ensemble that features an elegant net shirt adorned with sparkling off-white, and gold zari embroidery. Completed with pearl embellishments on daman and sleeves.',
 'https://www.sanasafinaz.com/media/catalog/product/s/2/s2s2sge377.jpg?width=613&height=920&canvas=613:920&optimize=medium&bg-color=255,255,255&fit=bounds',
 'Chamakta Tara',
 200.00,
 '8ece0772-2251-43e5-855b-eaf4e9684ca8'::uuid,
 'eee3dac1-8301-4093-ab01-0f191c745db2'::uuid),
('8146f8b3-e489-430f-81c9-1079957fbe0e'::uuid,
 'Steal the limelight in this classy shirt featuring exquisite embroidery all over. The delicate ladder lace detailing, dori tassels and pearl hangings make this shirt contemporary yet elegant in all ways.',
 'https://www.sanasafinaz.com/media/catalog/product/s/s/ss22sge399_1_.jpg?width=613&height=920&canvas=613:920&optimize=medium&bg-color=255,255,255&fit=bounds',
 'Organza Blue Paani',
 140.50,
 '8ece0772-2251-43e5-855b-eaf4e9684ca8'::uuid,
 'eee3dac1-8301-4093-ab01-0f191c745db2'::uuid),
('5ccbb1a3-34fa-4cb6-9002-4ea918bb5458'::uuid,
 'A 3 piece stitched suit with beautiful details yet so simple and basic colors',
 'https://cdn.shopify.com/s/files/1/2337/7003/products/0011_33_eba9925e-34f7-4742-a122-98155898b2cf_700x.jpg?v=1656145462',
 'Pyaari Suffuse',
 110.00,
 'a88378bf-09b0-4fc7-a1be-0388a8a6ebfb'::uuid,
 'bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid),
('d03cae72-ffc3-46ee-9f90-9b56cbe8211a'::uuid,
 'This exquisite look embellished with 3D flowers and pearls on a light teal canvas is bound to make a statement at every event. This aesthetic is enhanced further with beige French lace detailing and an embroidered border on a sea green silk fabric.',
 'https://www.sanasafinaz.com/media/catalog/product/0/5/05-front_1.jpg?width=613&height=920&canvas=613:920&optimize=medium&bg-color=255,255,255&fit=bounds',
 'Tittly urhy',
 150.00,
 'a88378bf-09b0-4fc7-a1be-0388a8a6ebfb'::uuid,
 'bcc8ed58-f6d6-11ec-b939-0242ac120002'::uuid),
('c0bf4aa6-458c-4ecc-9d67-98ea959b8c7a'::uuid,
 'This floral embroidered look will transport you to the bygone era of finesse. Hand-embellished with pearls and sequins on a peach net canvas, with a delicately ornamented border on light blue organza fabric.',
 'https://www.sanasafinaz.com/media/catalog/product/0/2/02-front_1.jpg?width=613&height=920&canvas=613:920&optimize=medium&bg-color=255,255,255&fit=bounds',
 'Coral Moti',
 180.00,
 'a88378bf-09b0-4fc7-a1be-0388a8a6ebfb'::uuid,
 'd03cae72-ffc3-46ee-9f90-9b56cbe8211a'::uuid);

INSERT INTO public.cart_clothing (cart_clothing_id,id_cart,id_clothing) VALUES
('340691a8-f642-11ec-b939-0242ac120002'::uuid,'4c0a64eb-0f61-44f6-96a4-35ac62b35283'::uuid,'090f3d7c-f6ad-11ec-b939-0242ac120002'::uuid);

