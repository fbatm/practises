f=(n)=>{
	if(n <= 1){
		return 0;
	}else if(n <= 3){
		return 1;
	}else{
		return f(n - 2) + f(n - 3);
	}
}

f=(n)=>{
	a=[0, 0, 1, 1];
	for(i = 4;i <= n;i++){
		a[i] = a[i-2] + a[i-3];
	}
	return a;
}

result=[];

f(a, n) = [max(f(n-1)[0], f(n-1)[1]), f(n-1)[0] + a[n]];

f=(a)=>{
	let result = [[0, a[0]]];
	if(a.length <= 2){
		return Math.max(a);
	}else{
		for(let i = 1;i<a.length;i++){
			result[i] = [Math.max(result[i-1][0], result[i-1][1]), result[i-1][0] + a[i]];
		}
	}
	return Math.max.apply(null, result.pop());
}


f=(n)=>{
	let c = 0;
	while(n){
		if(n & 1){
			c++;
		}
		n = n >> 1;
	}
	return c;
}

/*
	f=function(){this.value=v;this.left=null;this.right=null};
	o={}
	['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'M'].map((x)=>{o[x]=new f(x)});
	o.F.left=o.C
	o.F.right=o.E
	o.C.left=o.A
	o.C.right=o.D
	o.D.left=o.B
	o.E.left=o.H
	o.E.right=o.G
	o.G.left=o.M
*/

f=(node)=>{
	let stack = [node], result = [], temp = null;

	while(stack.length){
		temp = stack.pop();
		result.push(temp.value);
		if(temp.right){
			stack.push(temp.right);
		}
		if(temp.left){
			stack.push(temp.left);
		}
	}
	return result;
}

f=(node)=>{
	let stack = [node], result = [], next=node, temp = null;
	while(stack.length){
		next = next.left;
		while(next){
			stack.push(next);
			next = next.left;
		}
		temp = stack.pop();
		result.push(temp.value);
		while(!temp.right && stack.length){
			temp = stack.pop();
			result.push(temp.value);
		}
		if(temp.right){
			next = temp.right;
			stack.push(next);
		}
	}
	return result;
}

f=(a, b)=>{
	let s, l;
	if(a > b){
		s = b;
		l = a;
	}else {
		s = a;
		l = b;
	}
	if(l % s === 0){
		return s;
	}else{
		return f(s, l % s);
	}
}

f=(head, k)=>{
	let dummy = new ListNode(), tail = head, pre = dummy, next = tail.next;
	dummy.next = head;

	while(next){
		for(let i = 0;i < k && tail.next;i++){
			tail = tail.next;
		}

		next = tail.next;

		let p = head, cur = p.next;
		while(cur != tail.next){
			const temp = cur.next;
			cur.next = p;
			p = cur;
			cur = temp;
		}

		pre.next = tail;
		head.next = next;

		tail = head;
	}

	return dummy;
}

