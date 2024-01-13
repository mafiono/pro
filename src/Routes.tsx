import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Banner1265x250 = React.lazy(() => import("pages/Banner1265x250"));
const Prelouder = React.lazy(() => import("pages/Prelouder"));
const PWA1248 = React.lazy(() => import("pages/PWA1248"));
const PWA1920 = React.lazy(() => import("pages/PWA1920"));
const SizesOne = React.lazy(() => import("pages/SizesOne"));
const WithoutsidebarSeven1 = React.lazy(
  () => import("pages/WithoutsidebarSeven1"),
);
const WithoutsidebarEight1 = React.lazy(
  () => import("pages/WithoutsidebarEight1"),
);
const WithoutsidebarEight = React.lazy(
  () => import("pages/WithoutsidebarEight"),
);
const WithoutsidebarNine = React.lazy(() => import("pages/WithoutsidebarNine"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Six1 = React.lazy(() => import("pages/Six1"));
const Five1 = React.lazy(() => import("pages/Five1"));
const Three1 = React.lazy(() => import("pages/Three1"));
const BannerFour = React.lazy(() => import("pages/BannerFour"));
const Nine1 = React.lazy(() => import("pages/Nine1"));
const Five = React.lazy(() => import("pages/Five"));
const Two1 = React.lazy(() => import("pages/Two1"));
const Four1 = React.lazy(() => import("pages/Four1"));
const Seven1 = React.lazy(() => import("pages/Seven1"));
const Two = React.lazy(() => import("pages/Two"));
const TournamentThree = React.lazy(() => import("pages/TournamentThree"));
const Four = React.lazy(() => import("pages/Four"));
const Nine = React.lazy(() => import("pages/Nine"));
const BannerTwo = React.lazy(() => import("pages/BannerTwo"));
const BannerEight = React.lazy(() => import("pages/BannerEight"));
const Banner = React.lazy(() => import("pages/Banner"));
const BannerSix = React.lazy(() => import("pages/BannerSix"));
const BannerSeven = React.lazy(() => import("pages/BannerSeven"));
const BannerOne = React.lazy(() => import("pages/BannerOne"));
const BannerNine = React.lazy(() => import("pages/BannerNine"));
const BannerFive = React.lazy(() => import("pages/BannerFive"));
const BannerThree = React.lazy(() => import("pages/BannerThree"));
const Three = React.lazy(() => import("pages/Three"));
const Seven = React.lazy(() => import("pages/Seven"));
const Six = React.lazy(() => import("pages/Six"));
const Eight1 = React.lazy(() => import("pages/Eight1"));
const Openarchivewithcomplitedpromo = React.lazy(
  () => import("pages/Openarchivewithcomplitedpromo"),
);
const Buttonopenarchive = React.lazy(() => import("pages/Buttonopenarchive"));
const Eight = React.lazy(() => import("pages/Eight"));
const Ten = React.lazy(() => import("pages/Ten"));
const LoginedFive = React.lazy(() => import("pages/LoginedFive"));
const LoginedTwo1 = React.lazy(() => import("pages/LoginedTwo1"));
const LoginedSix = React.lazy(() => import("pages/LoginedSix"));
const LoginedOne1 = React.lazy(() => import("pages/LoginedOne1"));
const Search2 = React.lazy(() => import("pages/Search2"));
const Search1 = React.lazy(() => import("pages/Search1"));
const GuestOne = React.lazy(() => import("pages/GuestOne"));
const Guest1 = React.lazy(() => import("pages/Guest1"));
const LoginedFour = React.lazy(() => import("pages/LoginedFour"));
const Logined1 = React.lazy(() => import("pages/Logined1"));
const CEOTextInfo = React.lazy(() => import("pages/CEOTextInfo"));
const LoginedThree = React.lazy(() => import("pages/LoginedThree"));
const Logined = React.lazy(() => import("pages/Logined"));
const LoginedTwo = React.lazy(() => import("pages/LoginedTwo"));
const RecentlyPlayed = React.lazy(() => import("pages/RecentlyPlayed"));
const Guest = React.lazy(() => import("pages/Guest"));
const LoginedOne = React.lazy(() => import("pages/LoginedOne"));
const WithoutsidebarThree1 = React.lazy(
  () => import("pages/WithoutsidebarThree1"),
);
const WithoutsidebarTwo1 = React.lazy(() => import("pages/WithoutsidebarTwo1"));
const WithoutsidebarOne1 = React.lazy(() => import("pages/WithoutsidebarOne1"));
const WithoutsidebarSeven = React.lazy(
  () => import("pages/WithoutsidebarSeven"),
);
const VIPPopUPnextlevel = React.lazy(() => import("pages/VIPPopUPnextlevel"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page = React.lazy(() => import("pages/Page"));
const Login1248 = React.lazy(() => import("pages/Login1248"));
const Login1920 = React.lazy(() => import("pages/Login1920"));
const Registration1248 = React.lazy(() => import("pages/Registration1248"));
const Registration1920 = React.lazy(() => import("pages/Registration1920"));
const PaymentsWithrawals = React.lazy(() => import("pages/PaymentsWithrawals"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const TermsandConditions = React.lazy(() => import("pages/TermsandConditions"));
const WithoutsidebarFour1 = React.lazy(
  () => import("pages/WithoutsidebarFour1"),
);
const WithoutsidebarFour = React.lazy(() => import("pages/WithoutsidebarFour"));
const WithoutsidebarFive1 = React.lazy(
  () => import("pages/WithoutsidebarFive1"),
);
const WithoutsidebarOne = React.lazy(() => import("pages/WithoutsidebarOne"));
const WithoutsidebarSix1 = React.lazy(() => import("pages/WithoutsidebarSix1"));
const Withoutsidebar1 = React.lazy(() => import("pages/Withoutsidebar1"));
const WithoutsidebarFive = React.lazy(() => import("pages/WithoutsidebarFive"));
const WithoutsidebarSix = React.lazy(() => import("pages/WithoutsidebarSix"));
const Withoutsidebar = React.lazy(() => import("pages/Withoutsidebar"));
const WithoutsidebarTwo = React.lazy(() => import("pages/WithoutsidebarTwo"));
const WithoutsidebarThree = React.lazy(
  () => import("pages/WithoutsidebarThree"),
);
const PWA = React.lazy(() => import("pages/PWA"));
const One1 = React.lazy(() => import("pages/One1"));
const One = React.lazy(() => import("pages/One"));
const Banner1264x400main = React.lazy(() => import("pages/Banner1264x400main"));
const Search = React.lazy(() => import("pages/Search"));
const Footer = React.lazy(() => import("pages/Footer"));
const Sizes = React.lazy(() => import("pages/Sizes"));
const PWAOne = React.lazy(() => import("pages/PWAOne"));
const TextStyle = React.lazy(() => import("pages/TextStyle"));
const FooterOne = React.lazy(() => import("pages/FooterOne"));
const Cover = React.lazy(() => import("pages/Cover"));
const PaymentsDeposit = React.lazy(() => import("pages/PaymentsDeposit"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentsDeposit />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/footerone" element={<FooterOne />} />
          <Route path="/textstyle" element={<TextStyle />} />
          <Route path="/pwaone" element={<PWAOne />} />
          <Route path="/sizes" element={<Sizes />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/banner1264x400main" element={<Banner1264x400main />} />
          <Route path="/one" element={<One />} />
          <Route path="/one1" element={<One1 />} />
          <Route path="/pwa" element={<PWA />} />
          <Route
            path="/withoutsidebarthree"
            element={<WithoutsidebarThree />}
          />
          <Route path="/withoutsidebartwo" element={<WithoutsidebarTwo />} />
          <Route path="/withoutsidebar" element={<Withoutsidebar />} />
          <Route path="/withoutsidebarsix" element={<WithoutsidebarSix />} />
          <Route path="/withoutsidebarfive" element={<WithoutsidebarFive />} />
          <Route path="/withoutsidebar1" element={<Withoutsidebar1 />} />
          <Route path="/withoutsidebarsix1" element={<WithoutsidebarSix1 />} />
          <Route path="/withoutsidebarone" element={<WithoutsidebarOne />} />
          <Route
            path="/withoutsidebarfive1"
            element={<WithoutsidebarFive1 />}
          />
          <Route path="/withoutsidebarfour" element={<WithoutsidebarFour />} />
          <Route
            path="/withoutsidebarfour1"
            element={<WithoutsidebarFour1 />}
          />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/paymentswithrawals" element={<PaymentsWithrawals />} />
          <Route path="/registration1920" element={<Registration1920 />} />
          <Route path="/registration1248" element={<Registration1248 />} />
          <Route path="/login1920" element={<Login1920 />} />
          <Route path="/login1248" element={<Login1248 />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/vippopupnextlevel" element={<VIPPopUPnextlevel />} />
          <Route
            path="/withoutsidebarseven"
            element={<WithoutsidebarSeven />}
          />
          <Route path="/withoutsidebarone1" element={<WithoutsidebarOne1 />} />
          <Route path="/withoutsidebartwo1" element={<WithoutsidebarTwo1 />} />
          <Route
            path="/withoutsidebarthree1"
            element={<WithoutsidebarThree1 />}
          />
          <Route path="/loginedone" element={<LoginedOne />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/recentlyplayed" element={<RecentlyPlayed />} />
          <Route path="/loginedtwo" element={<LoginedTwo />} />
          <Route path="/logined" element={<Logined />} />
          <Route path="/loginedthree" element={<LoginedThree />} />
          <Route path="/ceotextinfo" element={<CEOTextInfo />} />
          <Route path="/logined1" element={<Logined1 />} />
          <Route path="/loginedfour" element={<LoginedFour />} />
          <Route path="/guest1" element={<Guest1 />} />
          <Route path="/guestone" element={<GuestOne />} />
          <Route path="/search1" element={<Search1 />} />
          <Route path="/search2" element={<Search2 />} />
          <Route path="/loginedone1" element={<LoginedOne1 />} />
          <Route path="/loginedsix" element={<LoginedSix />} />
          <Route path="/loginedtwo1" element={<LoginedTwo1 />} />
          <Route path="/loginedfive" element={<LoginedFive />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/buttonopenarchive" element={<Buttonopenarchive />} />
          <Route
            path="/openarchivewithcomplitedpromo"
            element={<Openarchivewithcomplitedpromo />}
          />
          <Route path="/eight1" element={<Eight1 />} />
          <Route path="/six" element={<Six />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/three" element={<Three />} />
          <Route path="/bannerthree" element={<BannerThree />} />
          <Route path="/bannerfive" element={<BannerFive />} />
          <Route path="/bannernine" element={<BannerNine />} />
          <Route path="/bannerone" element={<BannerOne />} />
          <Route path="/bannerseven" element={<BannerSeven />} />
          <Route path="/bannersix" element={<BannerSix />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/bannereight" element={<BannerEight />} />
          <Route path="/bannertwo" element={<BannerTwo />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/four" element={<Four />} />
          <Route path="/tournamentthree" element={<TournamentThree />} />
          <Route path="/two" element={<Two />} />
          <Route path="/seven1" element={<Seven1 />} />
          <Route path="/four1" element={<Four1 />} />
          <Route path="/two1" element={<Two1 />} />
          <Route path="/five" element={<Five />} />
          <Route path="/nine1" element={<Nine1 />} />
          <Route path="/bannerfour" element={<BannerFour />} />
          <Route path="/three1" element={<Three1 />} />
          <Route path="/five1" element={<Five1 />} />
          <Route path="/six1" element={<Six1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/withoutsidebarnine" element={<WithoutsidebarNine />} />
          <Route
            path="/withoutsidebareight"
            element={<WithoutsidebarEight />}
          />
          <Route
            path="/withoutsidebareight1"
            element={<WithoutsidebarEight1 />}
          />
          <Route
            path="/withoutsidebarseven1"
            element={<WithoutsidebarSeven1 />}
          />
          <Route path="/sizesone" element={<SizesOne />} />
          <Route path="/pwa1920" element={<PWA1920 />} />
          <Route path="/pwa1248" element={<PWA1248 />} />
          <Route path="/prelouder" element={<Prelouder />} />
          <Route path="/banner1265x250" element={<Banner1265x250 />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
