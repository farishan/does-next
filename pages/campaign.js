import Head from 'next/head'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import ATF from '@/components/ATF'

export default function Campaign() {
  const { site_title } = useContent()
  return (
    <Layout>
      <Head>
        <title>Campaign - {site_title}</title>
      </Head>

      <ATF title={`GELORA`} imageURL={`https://i.ibb.co/JHZ3p3N/image.png`} />

      <div className="container py-10 md:py-20">
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{
            __html: `
            <img src="https://i.ibb.co/NyYqVZD/image.png" alt="image" border="0" class="w-full mx-auto">

            <p>15 Desember 2021, dalam rangka merayakan ulang tahun yang ke-6, Does University  mengadakan sebuah acara dengan judul  GELORA.</p>

            <p>Apasih sebenernya GELORA?</p>

            <p>
            Jadi, Gelora adalah sebuah acara dimana Does untuk pertama kalinya mengadakan perayaan ulang tahun yang berisikan gelar karya, sekaligus peresmian yayasan dan publikasi Does Studio.
            Arti kata dari Gelora sendiri secara harfiah berarti gerakan gelombang yang hebat. Huruf “G” pada Logo GELORA melambangkan angka 6 yang bermakna perjalanan DOES sudah menginjak tahun ke 6. Tambahan aksen api turut memperkuat Logo GELORA untuk memvisualkan SEMANGAT YANG MENGGELORA.
            </p>

            <p>
            Acara apa aja yang ada di Gelora?
            </p>

            <ol>
            <li>
            <p>Pameran</p>
            <p>Ini adalah kali pertama DOES ngadain pameran dan bakalan BEDA sama pameran-pameran yang di dunia dan antariksa.</p>
            </li>
            <li>
            <p>Peresmian Yayasan</p>
            <p>Kami juga akan mengumumkan kabar sangat baik yaitu meresmikan yayasan yang nantinya akan menjadi payung untuk DOES University.</p>
            </li>
            <li>
            <p>Publikasi DOES Studio</p>
            <p>Di Does Studio, ada banyak service, Kamu dapat bekerjasama dengan mudah dan menyenangkan disini.</p>
            </li>
            </ol>

            <p>
            Di Gelora berkonsep NOSTALGIA,  dengan konsep ini akan jadi event kumpul alumni terbesar yang diadakan DOES University. Mengingat sudah 7 generasi yang lulus, dan ada sekitar 300 orang yang sudah melanglang buana di industri. selain alumni Does University akan berkolaborasi dengan Wisata Kali Apung. Kolaborasi ini nantinya akan melibatkan masyarakat sekitar, perangkat desa, dan pelapak kuliner tradisional.
            </p>

            <a href="https://www.instagram.com/p/CXK-6ivpwtR/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/p1nmKmz/image.png" alt="image" border="0" class="w-full mx-auto"></a>
          `
          }}
        ></div>
      </div>
    </Layout>
  )
}
