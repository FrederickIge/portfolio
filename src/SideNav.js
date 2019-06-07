import React from 'react';

function SideNav() {
  return (
    <div className='flex-self-stretch border-md-right border-gray-light bg-white col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6'>
      <img src='https://avatars1.githubusercontent.com/u/18103957?s=460&v=4' alt='user-avatar' className='circle mb-3' style={{maxWidth: '150px'}} />
      <h1 className='mb-2 lh-condensed'>Frederick Ige</h1>
      <p className={'mb-3 f4 text-gray'}>
        <span>
          <span style={{width: '1em', height: '1em', margin: '0 .05em 0 .1em', verticalAlign: '-0.1em'}} />Fullstack Software Developer
        </span>
      </p>
      <div className='f4 mb-6'>
        <div className='d-flex flex-items-center mb-3'>
          <span style={{color: '#24292e'}}>
            <svg
              aria-hidden='false'
              aria-label='GitHub'
              className='mr-2'
              height={20}
              role='img'
              viewBox='0 0 16 16'
              width={20}
              style={{display: 'inline-block', fill: 'currentColor', userSelect: 'none', verticalAlign: 'middle'}}
            >
              <path
                fillRule='evenodd'
                d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
              />
            </svg>
          </span>
          <a href='https://github.com/FrederickIge' >
            @FrederickIge
          </a>
        </div>
        <div className='d-flex flex-items-center mb-3'>
          <span style={{color: '#24292e'}}>
            <svg
              aria-hidden='false'
              aria-label='email'
              className='mr-2'
              height={20}
              role='img'
              viewBox='0 0 14 16'
              width='17.5'
              style={{display: 'inline-block', fill: 'currentColor', userSelect: 'none', verticalAlign: 'middle'}}
            >
              <path
                fillRule='evenodd'
                d='M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z'
              />
            </svg>
          </span>
          <a href='mailto:frederickigeit@gmail.com' >
            frederickigeit@gmail.com
          </a>
        </div>
        <div className='d-flex flex-items-center mb-3 false'>
          <span style={{color: '#24292e'}}>
            <svg
              aria-hidden='false'
              aria-label='Location'
              className='mr-2'
              height={20}
              role='img'
              viewBox='0 0 12 16'
              width={15}
              style={{display: 'inline-block', fill: 'currentColor', userSelect: 'none', verticalAlign: 'middle'}}
            >
              <path
                fillRule='evenodd'
                d='M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z'
              />
            </svg>
          </span>
          Washington, D.C.
        </div>

        <div className='mt-4'>
          <div href='https://github.com/FrederickIge' className='text-left '>
            Fullstack software developer specialized in modern web application development, experience in building clean UI designs, and a background
            in system administration.
          </div>
        </div>

        <span title='Hire me' className='d-inline-block f5 rounded-2 text-white bg-green mt-3 py-1 px-2'>
          Available for hire
        </span>
      </div>
    </div>
  );
}

export default SideNav;
