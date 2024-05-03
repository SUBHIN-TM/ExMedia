import React from 'react';
import '../../../src/style.css'

function Ball() {
  return (
    <div>
      <header>
        <a href="https://motion.dev" aria-label="Motion One">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
            viewBox="0 0 1260 454"
          >
            <path
              d="M475.753 0L226.8 453.6L0 453.6L194.392 99.4116C224.526 44.5081 299.724 0 362.353 0L475.753 0Z"
              stroke="none"
            ></path>
            <path
              d="M1031.93 113.4C1031.93 50.7709 1082.7 0 1145.33 0C1207.96 0 1258.73 50.7709 1258.73 113.4C1258.73 176.029 1207.96 226.8 1145.33 226.8C1082.7 226.8 1031.93 176.029 1031.93 113.4Z"
              stroke="none"
            ></path>
            <path
              d="M518.278 0L745.078 0L496.125 453.6L269.325 453.6L518.278 0Z"
              stroke="none"
            ></path>
            <path
              d="M786.147 0L1012.95 0L818.555 354.188C788.422 409.092 713.223 453.6 650.594 453.6L537.194 453.6L786.147 0Z"
              stroke="none"
            ></path>
          </svg>
        </a>
      </header>
      <div className="ball"></div>
    </div>
  );
}

export default Ball;
