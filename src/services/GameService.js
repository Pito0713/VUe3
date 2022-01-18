class GameService {
  getPointsOperationList = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 0,
            account: 'llrtest001',
            reason: '會員1',
            payment: 3,
            amount: 123,
            record: '(單據1)',
            ip: '1.2.3.4',
            remark: '顯示備註',
            createRange: '2021-12-28T12:12:12Z'
          },
          {
            id: 1,
            account: 'llrtest002',
            reason: '會員2',
            payment: 2,
            amount: 123678,
            record: '(單據4)',
            ip: '1.2.3.4',
            remark: '顯示備註',
            createRange: '2021-12-31T12:12:12Z'
          }
        ],
        total: 100,
        totalAmount: 100
      }
      res.data = res.data.filter(item => {
        if (body.account !== undefined) return item.account === body.account
        return true
      })

      res.data = res.data.filter(item => {
        if (body.payment !== undefined) return item.payment === body.payment
        return true
      })

      resolve(res)
    })
  }

  // 系統服務/資料
  getPointsServeinfo = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = [
        {
          account: 'llrtest001',
          roleID: '管理者',
          agentName: '會員1',
          wallet: 9912,
          amount: 1231
        },
        {
          account: 'llrtest002',
          roleID: '會員',
          agentName: '會員2',
          wallet: 12,
          amount: 46
        }
      ]

      const target = res.filter(item => {
        if (body.account !== undefined) return item.account === body.account
        return true
      })

      resolve(target)
    })
  }

  // 系統服務/更新
  postPointsServeUpdate = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = true
      resolve(res)
    })
  }
}

export default new GameService()
