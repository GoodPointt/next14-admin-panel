'use client';

import { Button, Flex } from '@chakra-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ImArrowLeft } from 'react-icons/im';
import { ImArrowRight } from 'react-icons/im';

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get('page') || 1;
  const limit = process.env.NEXT_PUBLIC_LIMIT;

  const params = new URLSearchParams(searchParams);

  const hasPrev = parseInt(page) > 1;

  const hasNext =
    parseInt(limit) * (parseInt(page) - 1) + parseInt(limit) < count;

  console.log('hasNext', hasNext);
  console.log('hasPrev', hasPrev);
  const handleChangePage = (type) => {
    type === 'prev'
      ? params.set('page', parseInt(page) - 1)
      : params.set('page', parseInt(page) + 1);

    replace(`${pathname}?${params}`);
  };

  return (
    <Flex justify={'center'} gap={20} py={10}>
      <Button
        variant={'unstyled'}
        _hover={{
          color: !hasPrev ? 'lightgray' : 'violet',
          cursor: !hasPrev && 'not-allowed',
        }}
        isDisabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        <ImArrowLeft size={35} />
      </Button>
      <Button
        variant={'unstyled'}
        _hover={{
          color: !hasNext ? 'lightgray' : 'violet',
          cursor: !hasNext && 'not-allowed',
        }}
        onClick={() => handleChangePage('next')}
        isDisabled={!hasNext}
      >
        <ImArrowRight size={35} />
      </Button>
    </Flex>
  );
};

export default Pagination;
