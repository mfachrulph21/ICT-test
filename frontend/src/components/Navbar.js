import {Menu} from 'antd'

function NavbarComponent() {
    return (
        <div>
            <Menu 
            style={{backgroundColor: '#80d6ff', color:'#fafafa', fontSize: 20}}
            mode='horizontal'
            // onClick={}
            
            items={[
                {
                    label: <img src={process.env.PUBLIC_URL + '/Logo-ICT.webp'} width='100' height='30' style={{marginTop: 10}}/>,
                    key: 'logo',
                },
                {
                    label: 'Statistics',
                    key: 'statistics'
                },
                {
                    label: 'Posts',
                    key: 'posts'
                }
            ]}
            >
            </Menu>
        </div>
    )
}


export default NavbarComponent;