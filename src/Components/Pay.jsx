import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LRyRXKiKoltwekFiLgJJ5ncjdKbm44AN65m9nvnYHtbOSbYYlXQhxyY660bKcHimKn0BVeo0DTfzOQJktT2aSt800YLyBok4U";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 120;
  border-radius: 5;
  padding: 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        history.push("/success");
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <Container>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Shop"
          image="https://avatars.githubsercontent.com/u/1486366?v=4"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>Pay Now</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
