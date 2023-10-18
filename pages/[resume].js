export default function Resume() {
  return <div>Redirecting...</div>;
}
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: 'https://drive.google.com/file/d/1_e-b51U-3TW77PJf5iUKRL02oD_bxmu8/view?usp=share_link',
      permanent: false,
    },
  };
}
