import React, { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Form, Button } from 'reactstrap';

import { Web3Provider } from '@ethersproject/providers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { useHistory } from 'react-router-dom';

const INFURA_ID = process.env.REACT_APP_FLEEK_KEY;
const NETWORK_NAME = 'mainnet';

const web3Modal = new Web3Modal({
  network: NETWORK_NAME,
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        INFURA_ID
      }
    }
  }
});

/**
 * Login component
 */
export default function Login() {
  const [injectedProvider, setInjectedProvider] = useState<Web3Provider>();
  const history = useHistory();

  const modalButton = [];

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  console.log(injectedProvider);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new Web3Provider(provider));

    history.push('/dashboard');

    provider.on('chainChanged', () => {
      setInjectedProvider(new Web3Provider(provider));
    });

    provider.on('accountsChanged', () => {
      setInjectedProvider(new Web3Provider(provider));
    });

    provider.on('disconnect', (code: string, reason: string) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButton.push(
        <Button
          key="logoutbutton"
          color="primary"
          block
          className=" waves-effect waves-light"
          onClick={logoutOfWeb3Modal}>
          Sign Out
        </Button>
      );
    } else {
      modalButton.push(
        <Button key="loginbutton" color="primary" block className=" waves-effect waves-light" onClick={loadWeb3Modal}>
          Sign In With Ethereum
        </Button>
      );
    }
  }

  return (
    <div className="account-pages my-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <div className="text-center mb-4">
              <h4>Sign in</h4>
              <p className="text-muted mb-4">Sign in to continue to Berf Chat.</p>
            </div>

            <Card>
              <CardBody className="p-4">
                <div className="p-3">
                  <Form>
                    <div className="d-grid">{modalButton}</div>
                  </Form>
                </div>
              </CardBody>
            </Card>

            <div className="mt-5 text-center">
              <p>
                © 2021 Crafted with <i className="mdi mdi-heart text-danger"></i> by the Berf Boys
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
