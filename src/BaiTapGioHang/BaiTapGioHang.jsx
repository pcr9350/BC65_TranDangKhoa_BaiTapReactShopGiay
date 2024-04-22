//rafce
import React, { useState } from "react";
import GioHang from "./GioHang";
import DanhSachSanPham from "./DanhSachSanPham";

const sanPham = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "https://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "https://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "https://svcy3.myclass.vn/images/adidas-super-star-red.png",
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 550,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 674,
    image: "https://svcy3.myclass.vn/images/adidas-swift-run.png",
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 250,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 456,
    image: "https://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 854,
    image: "https://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 750,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 524,
    image: "https://svcy3.myclass.vn/images/adidas-yeezy-350.png",
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 599,
    image: "https://svcy3.myclass.vn/images/nike-adapt-bb.png",
  },
  {
    id: 10,
    name: "Nike Air Max 97",
    alias: "nike-air-max-97",
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 984,
    image: "https://svcy3.myclass.vn/images/nike-air-max-97.png",
  },
  {
    id: 11,
    name: "Nike Air Max 97 Blue",
    alias: "nike-air-max-97-blue",
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 875,
    image: "https://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
  },
  {
    id: 12,
    name: "Nike Air Max 270 React",
    alias: "nike-air-max-270-react",
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 445,
    image: "https://svcy3.myclass.vn/images/nike-air-max-270-react.png",
  },
];
const BaiTapGioHang = () => {
  let [mangGioHang, setMangGioHang] = useState([
    {
      id: 1,
      name: "Adidas Prophere",
      image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
      price: 350,
      quanlity: 1,
    },
  ]);

  const themGioHang = (sanPhamClick) => {
    //thêm 1 thuộc tính vào sanPhamClick tạo ra sản phẩm trong giỏ hàng có thêm số lượng
    let sanPhamThem = {...sanPhamClick, quanlity: 1};
    //kiểm tra sản phẩm đã có trên giỏ hàng hay chưa
    let kiemTraSanPham = mangGioHang.find(p => p.id === sanPhamClick.id);
    if (kiemTraSanPham) {
        kiemTraSanPham.quanlity += 1; // Tăng số lượng
    }else {
        mangGioHang.push(sanPhamThem); // chưa có thì thêm dô
    }
    // Clone object reference value để hàm State hiểu là State mới
    mangGioHang = [...mangGioHang];
    //cập nhựt lại giỏ hàng
    setMangGioHang(mangGioHang);
  };

  //xóa giỏ hàng
  const xoaSanPham = (idXoa) => {
    let index = mangGioHang.findIndex(p => p.id === idXoa);
    if(index != -1) {
        mangGioHang.splice(index,1);
    }
// Cập nhựt lại giỏ hàng
    setMangGioHang([...mangGioHang]);
  }

  //Tăng, giảm số lượng
  const thayDoiSoLuong = (id, soLuong) => {
    // Dựa dô id tìm ra sản phẩm
    let sanPhamGioHang = mangGioHang.find(p => p.id === id);
    if (sanPhamGioHang) {
        if (sanPhamGioHang.quanlity > 0) {
            sanPhamGioHang.quanlity += soLuong;
        } else {
            sanPhamGioHang.quanlity = 1;
        }
    }
    // Cập nhựt lại giỏ hàng = hàm setState 
    setMangGioHang([...mangGioHang]);
  }

  return (
    <div className="container">
      <h2>Giỏ Hàng Mua Giày</h2>
      <GioHang mangGioHang={mangGioHang} xoaSanPham={xoaSanPham} thayDoiSoLuong={thayDoiSoLuong}/>
      <h3>Danh Sách Sản Phẩm</h3>
      <DanhSachSanPham sanPham={sanPham} themGioHang={themGioHang} />
    </div>
  );
};

export default BaiTapGioHang;
