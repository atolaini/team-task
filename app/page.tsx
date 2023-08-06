import Button from '@/components/ui/button';
import Form from '@/components/ui/form';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>H1 heading</h1>
      <h2>H2 heading</h2>
      <h3>H3 heading</h3>
      <h4>H4 heading</h4>
      <h5>H5 heading</h5>
      <h6>H6 heading</h6>
      <p>
        this is some paragraph text Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Amet praesentium iusto maxime saepe rerum ut fuga
        dolorem nesciunt, itaque molestiae eveniet ipsa! Asperiores hic minus
        reprehenderit modi aspernatur? Enim, veritatis!
      </p>
      <Button btnTxt='This is a button' />
      <Link href='/'>This is a link</Link>
      <Form />
    </div>
  );
}
