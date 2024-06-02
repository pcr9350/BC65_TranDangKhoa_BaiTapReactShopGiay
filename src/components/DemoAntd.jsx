import React, { useState } from "react";
import { Col, Rate, Row } from "antd";
import { Button, message, Space, DatePicker } from "antd";
import RefIcon from "@ant-design/icons/lib/icons/AlertTwoTone";
import TableAntd from "./TableAntd";
import BackTop from "antd/es/float-button/BackTop";
import { Steps } from "antd";
import { Cascader } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ColorPicker } from "antd";
import { Card } from 'antd';
import { useQuery } from "@tanstack/react-query";
import { userApi } from "../services/apiStore/user/userApi";

const { Meta } = Card;
const description = "This is a description.";

//Data cascade
const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
            disableCheckbox: true,
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
const onChangeCascade = (value) => {
  console.log(value);
};

const DemoAntd = () => {
  const [score, setScore] = useState(1);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
      icon: <RefIcon />,
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  // Color Picker
  const [open, setOpen] = useState(false);
  // Date Picker
  const { RangePicker } = DatePicker;
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  //Card Product
  const {isLoading, isPending, data, error1} = useQuery({
    queryKey:['userListApi'],
    queryFn: userApi.getAllMockApi,
    staleTime: 3 * 60 * 1000, // 3 phút sau dữ liệu mới cũ
    cacheTime: 5 * 60 * 1000, // thời gian lưu dữ liệu trong cache
    refetchOnWindowFocus: true, //kích vào cửa sổ browser thì queryFn chạy
})

  return (
    <div className="container">
      <h3 className="text-center">Sử dụng antd component</h3>
      <h4>Demo Rate</h4>
      <h5>{score}</h5>
      <Rate
        allowHalf
        defaultValue={score}
        onChange={(value) => {
          setScore(value);
        }}
      />
      <br />
      <h4>Demo message</h4>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
      <h4>Table</h4>
      <TableAntd />
      <h4>Float Button</h4>
      <BackTop />
      <hr />
      <h4>Steps</h4>
      <Steps
        current={2}
        items={[
          {
            title: "Finished",
            description,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
      <hr />

      <h4>Cascade</h4>
      <Cascader
        style={{
          width: "25%",
        }}
        placeholder="Chọn đi"
        options={options}
        onChange={onChangeCascade}
        multiple
        maxTagCount="responsive"
      />

      <hr />
      <h4>Color Picker</h4>
      <Space direction="herizontal">
        <ColorPicker defaultValue="#1677ff" showText className="mx-2" />
        <ColorPicker
          defaultValue="#1677ff"
          showText={(color) => <span>Custom Text ({color.toHexString()})</span>}
          className="mx-2"
        />
        <ColorPicker
          defaultValue="#1677ff"
          open={open}
          onOpenChange={setOpen}
          showText={() => (
            <DownOutlined
              rotate={open ? 180 : 0}
              style={{
                color: "rgba(0, 0, 0, 0.25)",
              }}
            />
          )}
        />
      </Space>

      <hr />
      <h4>Date Picker</h4>
      <Space direction="vertical" size={12}>
        <DatePicker
          showTime
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
        <RangePicker
          showTime={{
            format: "HH:mm",
          }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
      </Space>
      <hr />

      <h4>Card Product</h4>
      <div className="row">
      
      {data?.map((item, index) => {
        return <div key={index} className="col-2 mx-1 mb-1">
        <Card
          hoverable
          // style={{
          //   width: 240,
          // }}
          cover={
            <img
              alt={`${item.alias}`}
              src={`${item.image}`}
            />
          }
        >
          <Meta title={`Tên: ${item.name}`} description={`Giá: ${item.price}`} />
          <button className="btn btn-primary mt-1">Thêm giỏ hàng</button>
        </Card>
      </div>
      })
      
      }
        
      </div>
      <hr />
    </div>
  );
};

export default DemoAntd;
