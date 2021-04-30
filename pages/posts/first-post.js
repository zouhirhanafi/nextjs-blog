import Link from "next/link";
import { Head } from "../../components/Head";
import { View } from "../../components/View";

export default function FirstPost() {
  return (
    <View>
      <Head title="First post .....">
        {/* <HeadTitle>First post ...</HeadTitle> */}
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </View>
  );
}
