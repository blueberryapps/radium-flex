import * as React from 'react';
import { Box, Flex } from './index';

export default class ExampleFlex extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Flex grid</h1>

        <h2>Basic flex</h2>
        <Flex debug>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Ipsum magna dolore aute voluptate sunt do incididunt officia in et irure ut.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Commodo mollit est eu ullamco aute laboris ea sit labore elit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Tempor fugiat enim aliquip sunt magna sint ex consectetur.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Ipsum magna dolore aute voluptate sunt do incididunt officia in et irure ut.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Commodo mollit est eu ullamco aute laboris ea sit labore elit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Tempor fugiat enim aliquip sunt magna sint ex consectetur.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
          <Box col={12} xs={6} ms={4} sm={3} md={2} lg={1}>Reprehenderit nulla do eiusmod aliqua reprehenderit dolor cillum consequat esse sit.</Box>
        </Flex>
        <hr />
        <br />

        <h2>Gap</h2>
        <h3>No gap</h3>
        <Flex debug>
          <Box col={4}>Amet ut et culpa irure veniam aliquip nisi do eu.</Box>
          <Box col={4}>Nostrud eiusmod fugiat laboris Lorem ullamco ipsum tempor exercitation elit quis nostrud eiusmod ullamco officia.</Box>
          <Box col={4}>Quis cillum ea non adipisicing labore elit sit eiusmod.</Box>
        </Flex>
        <h3>Default gap</h3>
        <Flex debug gap>
          <Box col={4}>Amet ut et culpa irure veniam aliquip nisi do eu.</Box>
          <Box col={4}>Nostrud eiusmod fugiat laboris Lorem ullamco ipsum tempor exercitation elit quis nostrud eiusmod ullamco officia.</Box>
          <Box col={4}>Quis cillum ea non adipisicing labore elit sit eiusmod.</Box>
        </Flex>
        <h3>Custom gap</h3>
        <Flex debug gap={64}>
          <Box col={4}>Amet ut et culpa irure veniam aliquip nisi do eu.</Box>
          <Box col={4}>Nostrud eiusmod fugiat laboris Lorem ullamco ipsum tempor exercitation elit quis nostrud eiusmod ullamco officia.</Box>
          <Box col={4}>Quis cillum ea non adipisicing labore elit sit eiusmod.</Box>
        </Flex>
        <hr />
        <br />

        <h2>Box as Flex</h2>
        <Flex debug>
          <Box col={6}>Qui commodo ea culpa labore.</Box>
          <Box flex col={6}>
            <Box col={6}>Sit eiusmod quis labore officia reprehenderit voluptate do adipisicing adipisicing ea eu tempor.</Box>
            <Box col={6}>Amet nulla ut anim ea cillum non ullamco reprehenderit.</Box>
          </Box>
        </Flex>
        <hr />
        <br />

        <h2>Vertical align</h2>
        <Flex debug align="center">
          <Box col={4}>Adipisicing et ut nisi proident ex ad reprehenderit mollit deserunt et laboris.</Box>
          <Box col={4}>Cupidatat ut do eu dolor consequat Lorem voluptate. Excepteur Lorem aliquip irure est sint proident mollit elit et. Quis nostrud enim sit ad tempor. Cillum est do est Lorem aliqua non quis pariatur est nulla dolor occaecat sunt. Qui fugiat elit elit tempor enim ipsum laborum. Aliqua ullamco ad in officia aute consectetur dolore occaecat sunt eu aute.</Box>
          <Box col={4}>Aute veniam do laboris dolor eu cupidatat sunt est dolore Lorem sunt tempor.</Box>
        </Flex>
      </div>
    );
  }
}
