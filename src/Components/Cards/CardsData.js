import {BsGraphUp}from "react-icons/bs"
import {BsCartCheckFill}from "react-icons/bs"
import {GrDiamond}from "react-icons/gr"

// Analytics Cards Data
export const cardsData = [
    {
      title: "Sales",
      color: {
        backGround: "linear-gradient(to right, rgba(244, 160, 77, 0.7), rgba(230, 14, 50, 0.682))",
        backGroundExt: "linear-gradient(180deg,rgb(212, 121, 139)0%,rgb(212, 121, 139)100%)",
        boxShadow: "0px 10px 10px 0px rgb(212, 121, 149)",
      },
      progressBarValue: 70,
      value: "25,970",
      png:<BsGraphUp size={23}/>,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(to right, rgba(132, 213, 243, 1.1), rgba(16, 89, 236, 0.782))",
        backGroundExt: "linear-gradient(180deg,rgb(86, 131, 149)0%,rgb(86, 131, 149)100%)",
        boxShadow: "0px 10px 20px 0px rgba(132, 213, 243, 0.7)",
      },
      progressBarValue: 80,
      value: "14,270",
 png:<BsCartCheckFill  size={23}/>,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          " linear-gradient(to right, rgba(52, 238, 173, 0.7), rgba(4, 103, 63, 0.682))",
          backGroundExt: "linear-gradient(180deg,rgb(86, 159, 134)0%,rgb(86, 159, 134)100%)",
        boxShadow: "0px 10px 20px 0px  rgba(52, 238, 173, 0.7)",
      },
      progressBarValue: 60,
      value: "4,270",
   png:<GrDiamond size={23} />,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  