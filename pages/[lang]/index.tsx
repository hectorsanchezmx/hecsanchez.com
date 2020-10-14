import React from 'react';
import useTranslation from '@intl/useTranslations';
import Layout from '@components/Layout';
import { Title } from '@components/Typography';

const Index: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout className="posts" title={t('homeMetaTitle')}>
      <div>
        <Title size="lg">{t('homeTitle')}</Title>
        <p></p>
      </div>
    </Layout>
  );
};

export default Index;
