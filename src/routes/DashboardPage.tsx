import { useCurrencies } from '../api'
import styled from 'styled-components'
import { useNavigate, useParams } from "react-router-dom";
import { GeFlex } from '../ui'
import { CURRENCY_TO_COUNTRY_MAP } from '../constants';
import { formatNumber } from '../utils';
import type { Currency }  from '../api'

const GeHeader = styled(GeFlex)`
  height: 50px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.background};
  padding: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 8px 16px;
  }
`

const GeInput  = styled.input`
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background: white;
  border-radius: 4px;
  padding: 8px;
`

const Input = styled(GeInput)`
  width: 300px;
  height: 40px;
  font-size: 18px;
`

const GeList = styled(GeFlex)`
  align-items: center;
  flex-direction: column;
`

const GeRow = styled(GeFlex)`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`


const GeColumn = styled(GeFlex)`
  flex:1;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px 0;
  }
`

const GeDashboardWrapper = styled(GeFlex)`
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export function DashboardPage() {
  const params = useParams();
  const { data, loading } = useCurrencies(params.search);
  const navigate = useNavigate();

  console.log(data, loading);
  return (
    <GeDashboardWrapper>
      <GeHeader>
          <GeFlex><h1>George fx</h1></GeFlex>
          <GeFlex>
            <Input
              placeholder="Search by currency name..."
              type="text"
              value={params.search}
              onChange={(e) => {
                e.target.value ? navigate(`/dashboard/${e.target.value}`) : navigate(`/dashboard`)
              }}
            />
          </GeFlex>
      </GeHeader>
      <GeList>
        {data?.map(({ currency, nameI18N, exchangeRate }: Currency) => (
          <GeRow key={currency}>
            <GeColumn>
              <img src={`/flags/${CURRENCY_TO_COUNTRY_MAP[currency]}.png`} alt={''} />
            </GeColumn>
            <GeColumn>
              {currency}&nbsp;({nameI18N})
              </GeColumn>
            <GeColumn>{formatNumber(exchangeRate?.buy)} EUR</GeColumn>
          </GeRow>
        ))}
      </GeList>
    </GeDashboardWrapper>
  );
}
