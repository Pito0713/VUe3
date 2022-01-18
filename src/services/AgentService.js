class AgentService {
  // == 會員管理 ==
  // 會員列表/ 列表清單
  getGeneralAgentTableList = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 1,
            account: 'llrtest001',
            password: 123123,
            name: '會員1',
            phone: 1231311,
            agentName: '會員1',
            wallet: 11.1,
            bet: 11,
            profit: 'GENERAL AGENT',
            status: 1,
            createTime: '2021-12-28T12:12:12Z',
            updateTime: '2021-12-28T12:12:12Z',
            bankList: [
              {
                id: 1,
                account: 'account1',
                bankName: '太陽餅銀行',
                bankBranch: '台中分行',
                bankAccountName: '會員1',
                bankAccount: 'llrtest001',
                bankCearteTime: '2021-12-28T11:11:11Z',
                bankUpdateTime: '2021-12-28T11:11:11Z'
              },
              {
                id: 2,
                account: 'account2',
                bankName: '太陽餅銀行2',
                bankBranch: '台中分行2',
                bankAccountName: '會員2',
                bankAccount: 'llrtest001',
                bankCearteTime: '2021-12-28T12:11:11Z',
                bankUpdateTime: '2021-12-28T12:11:11Z'
              }
            ]
          },
          {
            id: 2,
            account: 'llrtest002',
            password: 567567,
            name: '會員2',
            phone: 1222222,
            agentName: '會員2',
            wallet: 22.22,
            bet: 22,
            profit: 'GENERAL AGENT',
            status: 2,
            createTime: '2021-12-28T11:11:11Z',
            updateTime: '2021-12-28T11:11:11Z',
            bankList: [
              {
                id: 1,
                account: 'account2',
                bankName: '土豆銀行',
                bankBranch: '台中分行',
                bankAccountName: '會員2',
                bankAccount: 'llrtest002',
                bankCearteTime: '2021-12-28T13:13:13Z',
                bankUpdateTime: '2021-12-28T13:13:13Z'
              }
            ]
          },
          {
            id: 3,
            account: 'llrtest003',
            password: 890890,
            name: '會員3',
            phone: 13333,
            agentName: '會員3',
            wallet: 33.3333,
            bet: 33,
            profit: 'GENERAL AGENT',
            status: 0,
            createTime: '2021-12-28T13:13:13Z',
            updateTime: '2021-12-28T13:13:13Z',
            bankList: [
              {
                id: 1,
                account: 'account3',
                bankName: '土地公銀行',
                bankBranch: '台中分行',
                bankAccountName: '會員3',
                bankAccount: 'llrtest003',
                bankCearteTime: '2021-12-28T13:13:13Z',
                bankUpdateTime: '2021-12-28T13:13:13Z'
              }
            ]
          }
        ],
        total: 3,
        totalUp: 3,
        totalProfit: 3
      }

      res.data = res.data.filter(item => {
        if (body.account !== undefined) return item.account === body.account
        return true
      })

      res.data = res.data.filter(item => {
        if (body.agentName !== undefined) return item.agentName === body.agentName
        return true
      })

      res.data = res.data.filter(item => {
        if (body.status !== undefined) return item.status === body.status
        return true
      })
      resolve(res)
    })
  }

  // 會員列表/ 新增會員
  postGeneralAgentCreate = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = true
      resolve(res)
    })
  }

  // 會員列表/ 更新會員
  putGeneralAgent = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = true
      resolve(res)
    })
  }
}

export default new AgentService()
