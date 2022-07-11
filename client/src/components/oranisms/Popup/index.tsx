import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import * as UI from './style';

interface Props {
  title?: React.ReactElement | string;
  primary?: boolean;
  subTitle?: React.ReactElement | string;
  footer?: boolean;
  children?: React.ReactElement | string;
}

const Popup = ({ title, subTitle, primary, footer, children }: Props) => {
  const modalDiv = document.getElementById('modal')!;
  const [domReady, setDomReady] = useState(false);
  useEffect(() => {
    setDomReady(true);
  });
  return domReady
    ? createPortal(
        <>
          <UI.Container>
            <UI.Content>
              <UI.Section>
                <Header title={title} subTitle={subTitle} primary={false} />
                {children && <Contents>{children}</Contents>}
                {footer && <Footer />}
              </UI.Section>
            </UI.Content>
            <UI.Dimd />
          </UI.Container>
        </>,
        modalDiv,
      )
    : null;
};

export default Popup;
