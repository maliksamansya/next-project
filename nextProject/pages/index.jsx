import Layout from "../components/layout/Layout.jsx";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn-2.tstatic.net/pekanbaru/foto/bank/images/arti-kata-meet-up-apa-sih-banyak-yang-menggunakannya-di-medsos.jpg",
    address: "Jl. Iskandar Muda",
    description: "This is A First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://asset-2.tstatic.net/pekanbaru/foto/bank/images/ilustrasi-meet-up-simak-di-sini-arti-kata-meet-up-sering-muncul-di-medsos.jpg",
    address: "Jl. Iskandar Muda",
    description: "This is A Second Meetup",
  },
];

function HomePage() {
  return (
    <>
      {/* <Layout /> */}
      <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </Layout>
    </>
  );
}

export default HomePage;
