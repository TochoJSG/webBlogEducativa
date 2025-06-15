import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => (
  <Helmet>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-J4M67R9GBV`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J4M67R9GBV');
      `}
    </script>
  </Helmet>
);

export default GoogleAnalytics;

/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J4M67R9GBV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J4M67R9GBV');  ${process.env.REACT_APP_GA_TRACKING_ID}
</script>
*/