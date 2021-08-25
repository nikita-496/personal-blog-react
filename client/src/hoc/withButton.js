//ОСТАНОВИЛСЯ СДЕСЬ. ПОДУСАТЬ КАК ИСПОЛЬЗОВАТЬ HOC ДЛЯ КОМПОНЕНТ С ЭФФЕКТОМ И КНОПКОЙ
const withButton = WrappedComponent => (props) => <WrappedComponent {...props} isButton={true}/>

export default withButton