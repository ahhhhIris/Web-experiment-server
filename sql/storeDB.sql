
use storedb;
create table users(
  user_id int primary key auto_increment,
  userName char (40) not null unique,
  password char (40) not null,
  userPhoneNumber char(11) null
);


create table product(
  product_id int primary key auto_increment,
  product_name char (100) not null,
  product_title char (30) not null,
  product_intro text not null,
  product_picture char (200),
  product_price double not null,
  product_selling_price double not null,
  product_num int not null,
  product_sales int not null
);
create table product_picture(
  id int primary key auto_increment,
  product_id int not null,
  product_picture char (200),
  intro text null,
  constraint FK_product_id foreign key (product_id) references product (product_id)
);
create table shoppingCart(
  id int primary key auto_increment,
  user_id int not null,
  product_id int not null,
  num int not null,
  constraint FK_shoppingCart_id foreign key (product_id) references product (product_id)
);
create table orders(
  id int primary key auto_increment,
  order_id bigint not null,
  user_id int not null,
  product_id int not null,
  product_num int not null,
  product_price double not null,
  order_time bigint not null,
  constraint FK_order_id foreign key (product_id) references product (product_id)
);
