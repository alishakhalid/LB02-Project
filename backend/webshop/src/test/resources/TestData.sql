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