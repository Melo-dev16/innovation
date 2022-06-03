import Script from 'next/script'

export default function Scripts() {
  return (
    <>
    <Script src="vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
    <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

    <Script src="assets/js/isotope.min.js" strategy="beforeInteractive" />
    <Script src="assets/js/owl-carousel.js" strategy="beforeInteractive" />
    <Script src="assets/js/lightbox.js" strategy="beforeInteractive" />
    <Script src="assets/js/tabs.js" strategy="beforeInteractive" />
    <Script src="assets/js/video.js" strategy="beforeInteractive" />
    <Script src="assets/js/slick-slider.js" strategy="beforeInteractive" />
    <Script src="assets/js/custom.js" strategy="beforeInteractive" />
    <Script src="/js/main.js"strategy="beforeInteractive" />
    </>
  )
}
