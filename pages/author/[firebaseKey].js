import React from 'react';
import { useRouter } from 'next/router';

export default function New() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { firebaseKey } = router.query;
  return <div>New here</div>;
}
