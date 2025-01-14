import { PageContainer } from '@ant-design/pro-components';
import {Access, useAccess, useModel} from '@umijs/max';
import { Button } from 'antd';

const Welcome: React.FC = () => {
    const access = useAccess();

    return (
        <PageContainer
            ghost
            header={{
                title: '权限示例',
            }}
        >
            <Access accessible={access.canSeeAdmin}>
                <Button>只有 Admin 可以看到这个按钮</Button>
            </Access>
        </PageContainer>
    );
};

export default Welcome;
