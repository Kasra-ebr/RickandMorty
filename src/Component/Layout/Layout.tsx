interface ILayout {
  children: React.ReactNode;
}

function Layout({children}: ILayout) {
  return (
    <div className='body'>
        {children}
    </div>
  )
}

export default Layout