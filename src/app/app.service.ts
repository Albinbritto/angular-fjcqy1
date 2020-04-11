export class AppService{

  headerLink:object[]=[
    {
      "name":"Login & SignUp",
      "url":"Login"
    },
    {
      "name":"About",
      "url":"About"
    },
    {
      "name":"Help",
      "url":"Help"
    }
  ]

  items:object[]=[
    {
      "name":"Samsung Galaxy A51 (Prism Crush Blue, 128 GB)",
      "imageurl":"https://rukminim1.flixcart.com/image/312/312/k62i5jk0/mobile/c/n/s/samsung-galaxy-a51-sm-a515fzbhins-original-imafzhr4cqc4wqnf.jpeg?q=70",
      "rating":"4",
      "DiscountPrice":"₹25,250",
      "ActualPrice":"₹26,250"
    },
    {
       "name":"Samsung Galaxy S20+ (Cosmic Black, 128 GB)",
       "imageurl":"https://rukminim1.flixcart.com/image/312/312/k6mibgw0/mobile/z/u/x/samsung-galaxy-s20-sm-g985fzkdinu-original-imafpfkbsxshxns2.jpeg?q=70",
       "rating":"4.5",
       "DiscountPrice":"₹28,250",
       "ActualPrice":"₹30,250"
    },
    {
       "name":"Samsung Galaxy S10 Lite (Prism Black, 128 GB)",
       "imageurl":"https://rukminim1.flixcart.com/image/312/312/k5o7r0w0/mobile/h/s/v/samsung-galaxy-s10-lite-sm-g770fzksinu-original-imafzaqnbjuffrvv.jpeg?q=70",
       "rating":"4",
       "DiscountPrice":"₹25,250",
       "ActualPrice":"₹27,250"
    },
    {
      "name":"Samsung Galaxy S20+ (Cloud Blue, 128 GB)",
       "imageurl":"https://rukminim1.flixcart.com/image/312/312/k6mibgw0/mobile/f/z/g/samsung-galaxy-s20-sm-g985flbdinu-original-imafpfkbrgbzetxv.jpeg?q=70",
       "rating":"3.5",
       "DiscountPrice":"₹29,250",
       "ActualPrice":"₹32,250"
    }
  ]
  getHeaderLink()
  {
    return this.headerLink;
  }
  getItems()
  {
    return this.items;
  }

}