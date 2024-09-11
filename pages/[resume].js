export default function Resume() {
  return <div>Redirecting...</div>;
}
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination:
        'https://drive.google.com/file/d/1JQWZ2o-K5NE6b75hqjp03QGDX39w3flj/view?usp=sharing',
      permanent: false,
    },
  };
}
