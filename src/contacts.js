const contacts = [
  {
    id: 1,
    name: "Kiara Advani",
    imgURL:
      "https://i.pinimg.com/originals/28/69/20/286920efb20b11f53312c1e95145c4ab.jpg",
    phone: "+91 78 96 32 45 15",
    email: "kiara21@gmail.com",
  },
  {
    id: 2,
    name: "Mahesh Babu",
    imgURL:
      "https://i.pinimg.com/474x/2d/d4/24/2dd424f0a61a0e14e0fa09d51f4fdfed.jpg",
    phone: "+91 93 64 27 81 43",
    email: "prince.mahesh@gmail.com",
  },
  {
    id: 3,
    name: "Malavika Sharma",
    imgURL:
      "https://i.pinimg.com/564x/78/1e/f8/781ef818e9c6cc0ee531248fc1a1bbd6.jpg",
    phone: "+91 98 54 23 74 19",
    email: "malavikasharma@gmail.com",
  },
  {
    id: 4,
    name: "Ram Charan",
    imgURL:
      "https://www.cinejosh.com/newsimg/newsmainimg/ram-charan-may-be-person-of-the-year-as-a-hero-and-producer_b_3012160648.jpg",
    phone: "+91 73 69 81 72 54",
    email: "ram2473@gmail.com",
  },
  {
    id: 5,
    name: "Keerthi Suresh",
    imgURL:
      "https://i.pinimg.com/736x/68/27/c7/6827c76f19f61a030593e2b362291dbb.jpg",
    phone: "+91 89 13 96 81 75",
    email: "keerthi259@gmail.com",
  },
  {
    id: 6,
    name: "Vijay Deveragonda",
    imgURL:
      "https://i.pinimg.com/564x/06/68/b5/0668b57eb0e8794b224f1462a8712679.jpg",
    phone: "+91 81 64 57 93 27",
    email: "vijaystongdude@gmail.com",
  },
  {
    id: 7,
    name: "Priyanka Arul",
    imgURL:
      "https://imageory.clapnumber.com/albums/large/1633014726_priyanka.png",
    phone: "+91 63 87 53 27 91",
    email: "priyankaA50@gmail.com",
  },
  {
    id: 8,
    name: "Prabhas",
    imgURL:
      "https://3.bp.blogspot.com/-i6GzrUTQXaA/W1tT_huT5FI/AAAAAAAAXpM/tZhkEYIfiB0AnEmLVSN5PfmQ1EgYuF5QwCLcBGAs/s1600/prabha.jpg",
    phone: "+91 84 40 87 34 56",
    email: "darling143@gmail.com",
  },
  {
    id: 9,
    name: "Ananya Pandey",
    imgURL:
      "https://i.pinimg.com/564x/0e/63/95/0e6395db550e253682290f799f0d92bd.jpg",
    phone: "+91 94 89 12 75 64",
    email: "ananyp07@gmail.com",
  },

  {
    id: 10,
    name: "Nazriya Nazim",
    imgURL:
      "https://i.pinimg.com/originals/17/66/f8/1766f8ae15f5cecfe7aa58f091a40d19.jpg",
    phone: "+91 85 00 75 96 12",
    email: "nazriyaneram01@gmail.com",
  },
  {
    id: 11,
    name: "Anushka Shetty",
    imgURL:
      "https://i.pinimg.com/236x/b2/05/b6/b205b66984a70748cdd9e78026f28c21.jpg",
    phone: "+91 98 75 12 94 36",
    email: "anushkashetty@gmail.com",
  },
  {
    id: 12,
    name: "Tiger Shroff",
    imgURL:
      "https://posterguy.in/wp-content/uploads/2021/07/Tiger-Shroff-roped-in-as-the-brand-ambassador-for-GreatWhite.jpg",
    phone: "+91 73 95 12 75 83",
    email: "tigershroff90@gmail.com",
  },
  {
    id: 13,
    name: "Jhanvi Kapoor",
    imgURL:
      "https://stylesatlife.com/wp-content/uploads/2021/05/Jhanvi-Kapoor.jpg",
    phone: "+91 93 65 71 98 13",
    email: "jhanvi240@gmail.com",
  },
  {
    id: 14,
    name: "Allu Arjun",
    imgURL:
      "https://cdn.mygodimages.com/mygodimg/preview/allu-arjun-images-photos-for-whatsapp-dp-11623670757dvdjwzjsv8.jpg",
    phone: "+91 73 69 81 72 54",
    email: "alluarjun451@gmail.com",
  },
  {
    id: 15,
    name: "Sayesha Saigal",
    imgURL:
      "https://i.pinimg.com/236x/e4/3b/97/e43b97c78eb9cddc1c50ea949deccbc6.jpg",
    phone: "+91 67 25 48 93 12",
    email: "saigal2229@gmail.com",
  },
  {
    id: 16,
    name: "Surya",
    imgURL:
      "https://www.wallpapertip.com/wmimgs/46-468374_surya-photos-download.jpg",
    phone: "+91 83 56 42 97 66",
    email: "vijaystongdude@gmail.com",
  },
  {
    id: 17,
    name: "Disha Patani",
    imgURL:
      "https://www.bollywoodhungama.com/wp-content/uploads/2020/01/EXCLUSIVE_-Disha-Patani-says-she-cant-pick-one-moment-as-her-favourite-from-Malang-shoot.jpg",
    phone: "+91 63 87 53 27 91",
    email: "dishapatani34@gmail.com",
  },
  {
    id: 18,
    name: "Prabhas",
    imgURL:
      "https://3.bp.blogspot.com/-i6GzrUTQXaA/W1tT_huT5FI/AAAAAAAAXpM/tZhkEYIfiB0AnEmLVSN5PfmQ1EgYuF5QwCLcBGAs/s1600/prabha.jpg",
    phone: "+91 84 40 87 34 56",
    email: "darling143@gmail.com",
  },
  {
    id: 19,
    name: "Sonu Sood",
    imgURL:
      "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1103x827/sonu-sood9607541_20200565058.jpg",
    phone: "+91 76 98 23 96 45",
    email: "sonusood56@gmail.com",
  },

  {
    id: 20,
    name: "Vaani Kapoor",
    imgURL:
      "https://i.pinimg.com/originals/bd/b7/50/bdb7504b20a99a3542f01089d97ab76a.jpg",
    phone: "+91 63 89 47 32 96",
    email: "vani34kapoor@gmail.com",
  },
];

export default contacts;
